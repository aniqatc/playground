const Bookmark = require('./bookmarkModel');
const User = require('../../main/models/userModel');
const cheerio = require('cheerio');
const Filter = require('leo-profanity');

class BookmarkData {
    constructor() {
        this.apiKey = process.env.GOOGLE_API_KEY;
        this.safeBrowsingURL = `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${this.apiKey}`;
        this.filter = Filter;
    }

    async processBookmark(url) {
        if (!url.startsWith('http')) {
            url = `https://${url}`;
        }
        if (await Bookmark.findOne({ url: url })) {
            throw new Error("Bookmark already exists.");
        }
        if (this.hasBadWords(url)) {
            throw new Error("URL contains inappropriate content.");
        }
        if (await this.isNotSafe(url)) {
            throw new Error("URL has been flagged by Google's Safe Browsing API.")
        }
        const metadata = await this.extractMetaData(url);
        const bookmark = new Bookmark({
            url,
            title: metadata.title,
            description: metadata.description,
            icon: metadata.icon,
            domain: metadata.domain,
            topics: metadata.topics,
            author: metadata.author,
            likes: [],
            dislikes: []
        });
        await bookmark.save();
        return bookmark;
    }

    hasBadWords(url) {
        const words = decodeURIComponent(url).toLowerCase().replace(/[^a-z0-9]+/g, '-').trim().split("-");
        return words.some(word => this.filter.check(word));
    }

    async isNotSafe(url) {
        const response = await fetch(this.safeBrowsingURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                threatInfo: {
                    threatTypes: ["MALWARE", "SOCIAL_ENGINEERING", "UNWANTED_SOFTWARE", "POTENTIALLY_HARMFUL_APPLICATION", "THREAT_TYPE_UNSPECIFIED"],
                    platformTypes: ["ANY_PLATFORM"],
                    threatEntryTypes: ["URL"],
                    threatEntries: [{url: url}]
                }
            })
        })
        const data = await response.json();
        return data.matches ? true : false;
    }

    async extractMetaData(url) {
        const response = await fetch(url);
        const html = await response.text();
        const $ = cheerio.load(html);

        const metadata = {
            title: $('title').text() || $('meta[property="og:title"]').attr('content'),
            description: $('meta[name="description"]').attr('content') || $('meta[property="og:description"]').attr('content'),
            icon: $('link[rel="icon"]').attr('href') || $('link[rel="shortcut icon"]').attr('href'),
            domain: new URL(url).hostname,
            topics: $('meta[name="keywords"]').attr("content")?.split(",").map(word => word.trim()) || [],
            author: $('meta[name="author"]').attr("content") || new URL(url).hostname || "",
        }

        if (metadata.icon && !metadata.icon.startsWith('https')) {
            metadata.icon = new URL(metadata.icon, url).href;
        }

        // Check content before returning
        const content = [metadata.title, metadata.description, ...metadata.topics].join(" ").toLowerCase();
        const words = content.split(/[\s\W]+/);
        if (words.some(word => this.filter.check(word))) {
            throw new Error("Page contains inappropriate content.")
        }

        // Return metadata object if clean
        return metadata;
    }
}

module.exports = new BookmarkData();