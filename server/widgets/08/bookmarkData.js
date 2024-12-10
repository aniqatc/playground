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
}

module.exports = new BookmarkData();