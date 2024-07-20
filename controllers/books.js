// cred: made using code from the following sources:
// - https://youtu.be/K00J87SofEc?si=E9FVdQXJRatU5l_A
// - https://www.mongodb.com/developer/languages/javascript/node-crud-tutorial/
// - https://www.youtube.com/watch?v=S0przpEKKGU
// - ./users.js
// - ./posts/js
// - https://mongoosejs.com/docs/validation.html
// - https://www.geeksforgeeks.org/mongoose-validation/#
// - https://www.mongodb.com/docs/manual/reference/method/db.collection.find/
// - https://mongoosejs.com/docs/queries.html
// - https://mongoosejs.com/docs/api/model.html#Model.find() 
// - https://mongoosejs.com/docs/api/query.html
// - https://mongoosejs.com/docs/api/model.html#Model.findById()
// - https://stackoverflow.com/questions/34095126/express-router-id
// - https://npmjs.com/package/isbn3
// - https://www.mongodb.com/docs/manual/tutorial/query-arrays/
// - https://mongoosejs.com/docs/tutorials/findoneandupdate.html
// - https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()
// - https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()
// - https://mongoosejs.com/docs/api/model.html#Model.findOneAndDelete()

// cred: from ./posts.js (with modifications)
const Book = require('../models/book.js');

// using code from: https://www.youtube.com/watch?v=S0przpEKKGU
const ObjectId = require("mongodb").ObjectId;


const isbn3 = require('isbn3')
// a function to check if an isbn is valid
function checkIsbn(isbn) {
    let auditResult
    try {
        auditResult = isbn3.audit(isbn).validIsbn
    } catch (err) {
        console.log('checkIsbn catch reached' + err)
        auditResult = false
    }
    return auditResult
}

// A placeholder function for not-yet-implimented routes
const placeholderRoute = (req, res) => {
    res.send("placeholder route...")
}

// POST /books
// Posts a new book
const postBookRoute = async (req, res) => {
    if (!checkIsbn(req.body.isbn)) {
        res.status(400).send("Invalid ISBN")
        return
    }

    let returnedBook    
    try {
        const book = new Book(req.body)
        returnedBook = await book.save()
    } catch (err) {
        res.status(400).send(err)
        return
    }
    
    if (returnedBook._id) {
        res.status(200).send(returnedBook._id)
    } else {
        res.status(500).send("There has been an error.")
    }
}

// GET /books (get all)
// Gets all the books
const getAllRoute = async (req, res) => {
    let books
    try {
        books = await Book.find({})
    } catch (err) {
        res.status(500).send(err)
        return
    }

    res.status(200).send(books)
}

// GET /books/isbn/{isbn}
// Gets a book according to the given isbn
const getByIsbnRoute = async (req, res) => {
    if (!checkIsbn(req.params.isbn)) {
        res.status(400).send("Invalid isbn")
        return
    }

    let book
    try {
        book = await Book.findOne({isbn: req.params.isbn})
    } catch (err) {
        res.status(400).send(err)
        return
    }

    if (book) {
        res.status(200).send(book)
    } else {
        res.status(400).send("Nothing found")
    }
}

// GET /book/id/{id}
// Gets a book according to the given id
const getByIdRoute = async (req, res) => {
    // using code from: https://www.youtube.com/watch?v=S0przpEKKGU
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).send("Invalid id")
        return
    }

    let book
    try {
        book = await Book.findById({_id: req.params.id})
    } catch (err) {
        res.status(400).send(err)
        return
    }

    if (book) {
        res.status(200).send(book)
    } else {
        res.status(400).send("Nothing found")
    }
}

// GET /books/title/{title}
// Gets book(s) according to the given id
const getByTitleRoute = async (req, res) => {
    let books
    try {
        books = await Book.find({book_title: req.params.title})
    } catch (err) {
        res.status(400).send(err)
        return
    }

    if (books) {
        res.status(200).send(books)
    } else {
        res.status(400).send("Nothing found")
    }
}

// GET /books/author/{author}
// Gets book(s) according to the given author
const getByAuthorRoute = async (req, res) => {
    let books
    try {
        books = await Book.find({authors: req.params.author})
    } catch (err) {
        res.status(400).send(err)
        return
    }

    if (books) {
        res.status(200).send(books)
    } else {
        res.status(400).send("Nothing found")
    }
}

// PUT /books/{:id}
// Puts body data to a book according to the given id
const putRoute = async (req, res) => {    
    // using code from: https://www.youtube.com/watch?v=S0przpEKKGU
    // ID CHECK
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).send("Invalid id")
        return
    }

    // ISBN CHECK
    if (req.body.isbn !== undefined){
        if (!checkIsbn(req.body.isbn)) {
            res.status(400).send("Invalid isbn")
            return
        }
    }

    // UPDATE DB
    let findByIdAndUpdateResult
    try {
        findByIdAndUpdateResult = await Book.findByIdAndUpdate(
            req.params.id, req.body, {new: true}
        )
    } catch (err) {
        res.status(400).send(err)
        return
    }

    // RESPONSE
    if (findByIdAndUpdateResult) {
        res.status(200).send(findByIdAndUpdateResult)
    } else {
        res.status(400).send("Nothing updated")
    }
}

// DELETE /books/{:id}
// deletes a book according to the given id
const deleteRoute = async (req, res) => {
    // using code from: https://www.youtube.com/watch?v=S0przpEKKGU
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).send("Invalid id")
        return
    }

    let findByIdAndDeleteResult
    try {
        findByIdAndDeleteResult = await Book.findByIdAndDelete(req.params.id, {includeResultMetadata: true})
    } catch (err) {
        res.status(500).send(err)
        return
    }

    if (findByIdAndDeleteResult.value === null) {
        res.status(400).send("Nothing deleted")
    } else {
        res.status(200).send(findByIdAndDeleteResult)
    }

}

module.exports = {
    placeholderRoute,
    postBookRoute,
    getAllRoute,
    getByIsbnRoute,
    getByIdRoute,
    getByTitleRoute,
    getByAuthorRoute,
    putRoute,
    deleteRoute
}