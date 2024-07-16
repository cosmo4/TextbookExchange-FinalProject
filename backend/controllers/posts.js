const Post = require("../model/post");

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message + " Get all posts error" });
  }
};

const getPostByTitle = async (req, res) => {
  try {
    const post = await Post.findOne({ post_content: req.params.post_content });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message + " Get post by title error" });
  }
};

const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message + " Get post by ID error" });
  }
};

const createPost = async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message + " Create post error" });
  }
};

const updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(post);
  } catch (error) {
    res.status500().json({ error: error.message + " Update post error" });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message + " Delete post error" });
  }
};

module.exports = {
  getAllPosts,
  getPostByTitle,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
