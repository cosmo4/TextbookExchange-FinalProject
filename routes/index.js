// made using code from:
// - https://expressjs.com/en/guide/routing.html

const express = require('express');
const router = express.Router();
const postsRoute = require('./posts');
const booksRoute = require('./books.js');
const reviewsRoute = require('./reviews');
const usersRoute = require('./users');

const swaggerAutogen = require('swagger-autogen')();
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerDocument = require('../swagger-output.json');

// router.use('/api-docs', swaggerUi.serve);
// router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.use('/posts', postsRoute);

router.use('/books', booksRoute);

router.use('/reviews', reviewsRoute);


module.exports = router;

