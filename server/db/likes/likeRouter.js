const { Likes } = require("./likeModel");
const express = require("express");
const router = express.Router();

router.route("/:widgetId/likes").get(getCurrentLikes).post(updateLikes);

async function getCurrentLikes(req, res) {
  const widgetId = req.params.widgetId;
  let widget = await Likes.findOne({ widgetId: widgetId });

  if (!widget) {
    res.status(404).json({
      status: "error",
      message: "not found",
    });
  } else {
    res.send({
      widgetId: widget.widgetId,
      likeCount: widget.likeCount,
    });
  }
}

async function updateLikes(req, res) {
  const widgetId = req.params.widgetId;
  let widget = await Likes.findOne({ widgetId: widgetId });

  if (!widget) {
    widget = new Likes({
      widgetId: widgetId,
      likeCount: 1,
    });
  } else {
    widget.likeCount += 1;
  }

  await widget.save();
  res.send({ likes: widget.likeCount });
}

module.exports = router;
