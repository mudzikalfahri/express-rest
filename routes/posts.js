const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  post
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
