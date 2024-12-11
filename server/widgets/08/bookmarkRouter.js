const express = require('express');
const router = express.Router();
const BookmarkData = require('./bookmarkData');

router.post('/add', async (req, res) => {
    try {
        const { url } = req.body;
        const bookmark = await BookmarkData.processBookmark(url);
        res.json(bookmark);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post('/:vote', async (req, res) => {
    try {
        const { vote } = req.params;
        const { userId, bookmarkId } = req.body;
        const voteCount = await BookmarkData.handleVote(userId, bookmarkId, vote);
        res.json(voteCount);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/all', async (req, res) => {
   try {
       const { userId } = req.query;
       const bookmarks = await BookmarkData.getBookmarks(userId);
       res.json({ bookmarks });
   } catch (error) {
       res.status(400).json({ error: error.message });
   }
});

router.get('/count', async (req, res) => {
    try {
        const { userId, bookmarkId } = req.query;
        const userVotes = await BookmarkData.getUserVoteCount(userId, bookmarkId);
        res.json({ count: userVotes.length });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

module.exports = router;