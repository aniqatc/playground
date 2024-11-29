const express = require('express');
const router = express.Router();
const MegaMillions = require('../models/megaMillionsModel');
const megaMillionData = require('./megaMillionData');

router.get('/all', async (req, res) => {
    const megaMillionsDrawings = await MegaMillions.find();

    res.json({
        success: true,
        data: megaMillionsDrawings
    });
});

module.exports = router;