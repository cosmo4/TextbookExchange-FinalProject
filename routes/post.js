const express = require("express");
const router = express.Router();
const postController = require("../controllers/post");

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Retrieve all posts
 *     responses:
 *       200:
 *         description: A list of posts.
 */
router.get("/", postController.getAllPosts);

/**
 * @swagger
 * /posts/{title}:
 *   get:
 *     summary: Retrieve a post by title
 *     parameters:
 *       - in: path
 *         name: title
 *         required: true
 *         schema:
 *           type: string
 *         description: The post title
 *     responses:
 *       200:
 *         description: A single post
 */
router.get("/:title", postController.getPostByTitle);

/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     summary: Retrieve a post by ISBN
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The post ISBN
 *     responses:
 *       200:
 *         description: A single post
 */
router.get("/:id", postController.getPostByISBN);

/**
 * @swagger
 * /posts:
 *   put:
 *     summary: Create a new post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               isbn:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 */
router.put("/", postController.createPost);

/**
 * @swagger
 * /posts:
 *   patch:
 *     summary: Update an existing post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               title:
 *                 type: string
 *               isbn:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Updated
 */
router.patch("/", postController.updatePost);

/**
 * @swagger
 * /posts:
 *   delete:
 *     summary: Delete a post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *     responses:
 *       200:
 *         description: Deleted
 */
router.delete("/", postController.deletePost);

module.exports = router;
