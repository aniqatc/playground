const express = require('express');
const router = express.Router();
const lotteryData = require('./lotteryData');

router.post('/update', async (req, res) => {
  await lotteryData.updateLotteryData();
  res.json({
    success: true,
    message: 'Lottery data updated successfully',
  });
});

module.exports = router;
