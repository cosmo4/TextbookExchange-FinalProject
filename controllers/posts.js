const express = require("express");
const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;
const getPostsConnection = mongodb.getDb().db().collection('posts');

const getAllPosts = async function(req, res) {
  const result = await getPostsConnection.find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
}

const getPostByTitle = async (req, res) => {
  console.log("get post by title");
};

const getPostByISBN = async (req, res) => {
  console.log("get post by ISBN");
};

const createPost = async (req, res) => {
  console.log("create post");
};

const updatePost = async (req, res) => {
  console.log("update post");
};

const deletePost = async (req, res) => {
  console.log("delete post");
};

module.exports = {
  getAllPosts,
  getPostByTitle,
  getPostByISBN,
  createPost,
  updatePost,
  deletePost,
};
