// cred: made using code from:
// - https://youtu.be/K00J87SofEc?si=E9FVdQXJRatU5l_A

const express = require('express');
const router = express.Router();
const booksController = require("../controllers/books.js");

// POST /books
// Posts a new book
// router.post('/', booksController.postBookRoute)

// GET /books (get all)
// Gets all the books
router.get('/', booksController.getAllRoute)

// GET /books/{isbn}
// Gets a book according to the given isbn
// router.get('/:isbn', booksController.getByIsbnRoute)

// GET /books/{id}
// Gets a book according to the given id
// router.get('/:id', booksController.getByIdRoute)

// GET /books/{title}
// Gets book(s) according to the given id
// router.get('/:title', booksController.getByTitleRoute)

// GET /books/{author}
// Gets book(s) according to the given author
// router.get('/:author', booksController.getByAuthorRoute)

// PUT /books/{id}
// Puts to a book according to the given id
// router.put('/:id', booksController.placeholderRoute)

// DELETE /books/{id}
// Deletes a book according to the given id
// router.delete('/:id', booksController.placeholderRoute)


module.exports = router