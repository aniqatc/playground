const mongoose = require('mongoose');

const BookmarkSchema = new mongoose.Schema({
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    // Core bookmark details
    url: { type: String, required: true, unique: true },
    title: String,
    description: String,
    icon: String,
    domain: String,
    topics: [String],
    // Storing IDs of user's likes/dislikes + count
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }],
    dislikes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }]
}, { timestamps: true });

module.exports = mongoose.model('Bookmarks', BookmarkSchema);
