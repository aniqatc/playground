const Bookmark = require('./bookmarkModel');
const User = require('../../main/models/userModel');
const Filter = require('bad-words');
const cheerio = require('cheerio');

class BookmarkData {
    constructor() {
        this.apiKey = process.env.GOOGLE_API_KEY;
        this.filter = new Filter();
        this.safeBrowsingURL = `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${this.apiKey}`;
    }

    async processURL(url) {
        if (this.hasBadWords(url)) {
            throw new Error("URL contains inappropriate content.");
        }
        if (await this.isNotSafe(url)) {
            throw new Error("URL has been flagged by Google's Safe Browsing API.")
        }
        const metadata = await this.extractMetaData(url);
    }

    hasBadWords(url) {
        const words = decodeURIComponent(url).toLowerCase().replace(/[^a-z0-9]+/g, '-').trim().split("-");
        return words.some(word => this.filter.isProfane(word));
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
            url,
            title: $('title').text() || $('meta[property="og:title"]').attr('content'),
            description: $('meta[name="description"]').attr('content') || $('meta[property="og:description"]').attr('content'),
            icon: $('link[rel="icon"]').attr('href') || $('link[rel="shortcut icon"]').attr('href'),
            domain: new URL(url).hostname,
            topics: $('meta[name="keywords"]').attr("content")?.split(",") || [],
            author: $('meta[name="author"]').attr("content") || new URL(url).hostname || "",
        }

        if (metadata.icon && !metadata.icon.startsWith('https')) {
            metadata.icon = new URL(metadata.icon, url).href;
        }
        return metadata;
    }
}

module.exports = new BookmarkData();