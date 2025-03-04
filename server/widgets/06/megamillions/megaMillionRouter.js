const express = require('express');
const router = express.Router();
const megaMillionData = require('./megaMillionData');

router.get('/range', async (req, res) => {
  const dates = await megaMillionData.fetchSearchRange();
  res.json({ success: true, dates });
});

router.post('/matches', async (req, res) => {
  const matches = await megaMillionData.fetchMatches(req.body);
  res.json({ success: true, matches });
});

router.post('/stats', async (req, res) => {
  const stats = await megaMillionData.fetchStats(req.body);
  res.json({ success: true, stats });
});

module.exports = router;
