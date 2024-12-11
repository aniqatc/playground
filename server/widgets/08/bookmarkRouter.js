const express = require('express');
const router = express.Router();
const BookmarkData = require('./bookmarkData');

router.get('/all', async (req, res) => {});

router.post('/add', async (req, res) => {
    try {
        const { url } = req.body;
        const bookmark = await BookmarkData.processBookmark(url);
        res.json(bookmark);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post('/:vote', async (req, res) => {})

module.exports = router;