const express = require("express");
const router = express.Router();
const reviewsController = require("../controllers/reviews.js");


// GET all posts
router.get('/', reviewsController.placeholderRoute)

//GET review by ID
router.get('/:id', reviewsController.placeholderRoute)

//POST review
router.post('/', reviewsController.placeholderRoute)

//put Review
router.put('/:id', reviewsController.placeholderRoute)

//DELETE Review
router.delete('/:id', reviewsController.placeholderRoute )

module.exports = router