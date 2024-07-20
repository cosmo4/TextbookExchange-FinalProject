const express = require('express');
const router = express.Router();
const postsRoute = require('./posts');
const booksRoute = require('./books');
const reviewsRoute = require('./reviews');
const usersRoute = require('./users');

const swaggerAutogen = require('swagger-autogen')();
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerDocument = require('../swagger-output.json');

// router.use('/api-docs', swaggerUi.serve);
// router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.get('/posts', postsRoute);

router.get('/books', booksRoute);

router.get('/reviews', reviewsRoute);




module.exports = router;

