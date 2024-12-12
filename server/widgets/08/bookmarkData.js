const Bookmark = require('./bookmarkModel');
const User = require('../../main/models/userModel');
const Filter = require('leo-profanity');
const cheerio = require('cheerio');
const natural = require('natural');

class BookmarkData {
    constructor() {
        this.apiKey = process.env.GOOGLE_API_KEY;
        this.safeBrowsingURL = `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${this.apiKey}`;
        this.filter = Filter;
    }

    async getBookmarks(userId) {
        const bookmarks = await Bookmark.find().sort({ createdAt: 1 }); // newest first
        const user = await User.findOne({ userId: userId });

        return bookmarks.map(bookmark => {
            if (!userId || !user) {
                return {
                    ...bookmark.toObject(),
                    userVote: null,
                    likeCount: bookmark.likes.length,
                    dislikeCount: bookmark.dislikes.length,
                }
            }

            const hasLiked = bookmark.likes.includes(user._id);
            const hasDisliked = bookmark.dislikes.includes(user._id);

            return {
                ...bookmark.toObject(),
                userVote: hasLiked ? 'like' : (hasDisliked ? 'dislike' : null),
                likeCount: bookmark.likes.length,
                dislikeCount: bookmark.dislikes.length,
            }
        })
    }

    async processBookmark(url) {
        if (!url.startsWith('http')) {
            url = `https://${url}`;
        }
        if (!new URL(url).hostname.includes('.')) {
            throw new Error("Invalid URL");
        }
        if (await Bookmark.findOne({ url: url })) {
            throw new Error("Bookmark already exists");
        }
        if (this.hasBadWords(url)) {
            throw new Error("URL contains inappropriate content");
        }
        if (await this.isNotSafe(url)) {
            throw new Error("URL is flagged by Google's Safe Browsing API")
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

    async extractMetaData(url) {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                // Headers that bypass error on some websites
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Upgrade-Insecure-Requests': '1',
                'Sec-Fetch-Dest': 'document',
                'Sec-Fetch-Mode': 'navigate',
                'Sec-Fetch-Site': 'none',
                'Sec-Fetch-User': '?1',
                }
            });
        const html = await response.text();
        const $ = cheerio.load(html);
        const parsedURL = new URL(url);

        const metadata = {
            title: $('title').text() || $('meta[property="og:title"]').attr('content') || parsedURL.hostname,
            description: $('meta[name="description"]').attr('content') || $('meta[property="og:description"]').attr('content') || $('title').text(),
            icon: $('link[rel="icon"]').attr('href') || $('link[rel="shortcut icon"]').attr('href') || `https://www.google.com/s2/favicons?domain=${parsedURL.hostname}&sz=128`,
            domain: new URL(url).hostname,
            topics: $('meta[name="keywords"]').attr("content")?.split(",").map(word => word.trim()) || [],
            author: $('meta[name="author"]').attr("content") || new URL(url).hostname,
        }

        // Check content before returning
        const content = [metadata.title, metadata.description, ...metadata.topics].join(" ").toLowerCase();
        const words = content.split(/[\s\W]+/);

        if (words.some(word => this.filter.check(word))) {
            throw new Error("Page contains inappropriate content");
        }

        if (metadata.icon && !metadata.icon.startsWith('https')) {
            metadata.icon = new URL(metadata.icon, url).href;
        }

        if (!metadata.topics || metadata.topics.length === 0) {
            metadata.topics = await this.extractTopics(metadata.title, metadata.description);
        }

        return metadata;
    }

    async extractTopics(title, description) {
        const tfidf = new natural.TfIdf();
       const content = [title, description].join(". ");
       tfidf.addDocument(content);
       const terms = tfidf.listTerms(0);
       return terms.sort((a, b) => b.tfidf - a.tfidf).map(term => term.term);
    }

    hasBadWords(url) {
        const urlText = decodeURIComponent(url).toLowerCase();
        const restrictedList = this.filter.list();
        return restrictedList.some(explicit => urlText.includes(explicit));
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

    async handleVote(userId, bookmarkId, vote) {
        const bookmark = await Bookmark.findOne({ _id: bookmarkId });
        const user = await User.findOne({ userId: userId });

        if (!bookmark || !user) {
            throw new Error("User or bookmark not found");
        }

        if (vote === "like") {
            bookmark.likes.push(user._id);
            bookmark.dislikes.pull(user._id);
        }
        if (vote === "dislike") {
            bookmark.dislikes.push(user._id);
            bookmark.likes.pull(user._id);
        }

        await bookmark.save();
        return {
            likeCount: bookmark.likes.length,
            dislikeCount: bookmark.dislikes.length,
            userVote: vote
        };
    }

    async getUserVoteCount(userId, bookmarkId) {
        const bookmark = await Bookmark.findOne({ _id: bookmarkId });
        const user = await User.findOne({ userId: userId });

        if (!bookmark || !user) {
            return { likeCount: 0, dislikeCount: 0 };
        }

        const likeCount = bookmark.likes.includes(user._id) ? 1 : 0;
        const dislikeCount = bookmark.dislikes.includes(user._id) ? 1 : 0;

        return { likeCount, dislikeCount };
    }
}

module.exports = new BookmarkData();