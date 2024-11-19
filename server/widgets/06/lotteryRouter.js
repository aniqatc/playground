const express = require('express');
const router = express.Router();
const Powerball = require('./models/powerballModel');
const MegaMillions = require('./models/megaMillionsModel');
const lotteryData = require('./lotteryData');

router.get('/all', async (req, res) => {
        const powerballDrawings = await Powerball.find();
        const megaMillionsDrawings = await MegaMillions.find();

        res.json({
            success: true,
            data: {
                powerball: powerballDrawings,
                megaMillions: megaMillionsDrawings
            }
        });
});

module.exports = router;