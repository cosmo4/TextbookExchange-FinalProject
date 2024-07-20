// cred: made using code from the following sources:
// - https://youtu.be/K00J87SofEc?si=E9FVdQXJRatU5l_A
// - https://www.mongodb.com/developer/languages/javascript/node-crud-tutorial/
// - https://www.youtube.com/watch?v=S0przpEKKGU
// - ./user.js
// - https://mongoosejs.com/docs/validation.html
// - https://www.geeksforgeeks.org/mongoose-validation/#
// - https://www.mongodb.com/docs/manual/reference/method/db.collection.find/

// cred: lines 2-4 come from ./posts.js (with modifications on 4)
const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;
const getBooksConnection = mongodb.getDb().db().collection('books');
const Book = require('../models/book.js');


// A placeholder function for not-yet-implimented routes
const placeholderRoute = (req, res) => {
    res.send("placeholder route...")
}

// const validatePost = (body) => {
//     // must be an object
//     if (typeof body !== "object") {
//         return false
//     }

//     for (i of )
// }

// POST /book
// Posts a new book
const postBookRoute = async (req, res) => {
    // if (!validatePost(req.body)) {
    //     res.status(400).send("Invalid body.")
    // }
    // const post = await getBooksConnection.insertOne(req.body)
    let returnedBook    
    try {
        const book = new Book(req.body)
        returnedBook = await book.save()
    } catch (err) {
        res.status(400).send(err)
        return
    }

    console.log(returnedBook)
    
    if (returnedBook._id) {
        res.status(200).send(returnedBook._id)
    } else {
        res.status(500).send("There has been an error.")
    }
}

// GET /book (get all)
// Gets all the books
const getAllRoute = async (req, res) => {
    // const c = getBooksConnection.find()

    // const r = await c.toArray()

    // res.status(200).send(r)
    res.send("reached")
}

// GET /book/{isbn}
// Gets a book according to the given isbn
const getByIsbnRoute = async (req, res) => {

}

// GET /book/{id}
// Gets a book according to the given id
const getByIdRoute = async (req, res) => {

}

// GET /book/{title}
// Gets book(s) according to the given id
const getByTitleRoute = async (req, res) => {

}

// GET /book/{author}
// Gets book(s) according to the given author
const getByAuthorRoute = async (req, res) => {

}

module.exports = {
    placeholderRoute,
    postBookRoute,
    getAllRoute,
    getByIsbnRoute,
    getByIdRoute,
    getByTitleRoute,
    getByAuthorRoute,
}