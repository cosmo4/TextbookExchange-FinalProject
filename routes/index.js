// made using code from:
// - https://expressjs.com/en/guide/routing.html

const express = require('express');
const router = express.Router();
const postsRoute = require('./posts');
const booksRoute = require('./books.js');
const reviewsRoute = require('./reviews');
const usersRoute = require('./users');
const { requiresAuth } = require("express-openid-connect");
const userController = require('../controllers/userController');

// Public route to create a new user (no auth required)
router.post('/users', userController.checkAndCreateUser);

// Protected routes
router.use('/posts', requiresAuth(), postsRoute);

router.use('/books', requiresAuth(), booksRoute);

router.use('/reviews', requiresAuth(), reviewsRoute);

router.use('/users', requiresAuth(), usersRoute);

module.exports = router;

