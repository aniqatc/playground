const express = require('express');
const router = express.Router();
const Powerball = require('../models/powerballModel');
const powerballData = require('./powerballData');
const megaMillionData = require("../megamillions/megaMillionData");

router.get('/all', async (req, res) => {
    const powerballDrawings = await Powerball.find();
    res.json({ success: true, data: powerballDrawings });
});

router.get('/range', async (req, res) => {
    const dates = await powerballData.fetchSearchRange();
    res.json({ success: true, dates });
})

router.post('/matches', async (req, res) => {
    const matches = await powerballData.fetchMatches(req.body);
    res.json({ success: true, matches });
})

router.post('/stats', async (req, res) => {
    const stats = await powerballData.fetchStats(req.body);
    res.json({ success: true, stats });
})

module.exports = router;