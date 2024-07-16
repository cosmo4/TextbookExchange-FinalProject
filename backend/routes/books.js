const express = require('express');
const router = express.Router();
const booksController = require("../controllers/books.js");

// POST /book
// Posts a new book
router.post('/', booksController.placeholderRoute)

// GET /book (get all)
// Gets all the books
router.get('/', booksController.placeholderRoute)

// GET /book/{isbn}
// Gets a book according to the given isbn
router.get('/:isbn', booksController.placeholderRoute)

// GET /book/{id}
// Gets a book according to the given id
router.get('/:id', booksController.placeholderRoute)

// GET /book/{title}
// Gets book(s) according to the given id
router.get('/:title', booksController.placeholderRoute)

// GET /book/{author}
// Gets book(s) according to the given author
router.get('/:author', booksController.placeholderRoute)

// PUT /book/{id}
// Puts to a book according to the given id
router.put('/:id', booksController.placeholderRoute)

// DELETE /book/{id}
// Deletes a book according to the given id
router.delete('/:id', booksController.placeholderRoute)


module.exports = router