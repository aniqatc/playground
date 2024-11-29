const express = require('express');
const router = express.Router();
const Powerball = require('../models/powerballModel');

router.get('/all', async (req, res) => {
    const powerballDrawings = await Powerball.find();

    res.json({
        success: true,
        data: powerballDrawings
    });
});

module.exports = router;