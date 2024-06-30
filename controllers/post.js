const express = require("express");
const mongodb = require("../db/connect");

const getAllPosts = async (req, res) => {
  console.log("get all posts");
};

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
