const express = require('express');
const router = express.Router();
const Powerball = require('../models/powerballModel');
const powerballData = require('./powerballData');

router.get('/all', async (req, res) => {
    const powerballDrawings = await Powerball.find();

    res.json({
        success: true,
        data: powerballDrawings
    });
});

router.get('/range', async (req, res) => {
    const dates = await powerballData.fetchSearchRange();
    res.json({ success: true, dates });
})

module.exports = router;