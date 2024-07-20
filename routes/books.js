// cred: made using code from:
// - https://youtu.be/K00J87SofEc?si=E9FVdQXJRatU5l_A
// - https://www.youtube.com/watch?v=K00J87SofEc

const express = require('express');
const router = express.Router();
const booksController = require("../controllers/books.js");

// POST /books
// Posts a new book
router.post('/', booksController.postBookRoute)

// GET /books (get all)
// Gets all the books
router.get('/', booksController.getAllRoute)

// GET /books/isbn/{isbn}
// Gets a book according to the given isbn
router.get('/isbn/:isbn', booksController.getByIsbnRoute)

// GET /books/id/{id}
// Gets a book according to the given id
router.get('/id/:id', booksController.getByIdRoute)

// GET /books/title/{title}
// Gets book(s) according to the given title
router.get('/title/:title', booksController.getByTitleRoute)

// GET /books/author/{author}
// Gets book(s) according to the given author
router.get('/author/:author', booksController.getByAuthorRoute)

// PUT /books/{id}
// Puts to a book according to the given id
router.put('/:id', booksController.putRoute)

// DELETE /books/{id}
// Deletes a book according to the given id
router.delete('/:id', booksController.deleteRoute)


module.exports = router