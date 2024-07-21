// using code from
// - https://fek.io/blog/how-to-add-unit-testing-to-express-using-jest/
// - https://jestjs.io/docs/getting-started
// - https://www.youtube.com/watch?v=hz0_q1MJa2k
// - https://www.youtube.com/watch?v=K00J87SofEc
// - https://www.youtube.com/watch?v=SBvmnHTQIPY
// - ../server.js

const request = require('supertest')
const express = require('express')
const router = require('../routes/books.js')

const connect = require("../db/connect.js")
const app = new express()
app.use('/books', router)

// NOTE: This runs a test on only the get requests for the /books route
describe('Testing /books GET requests', function () {

  test('responds to /books/id/:id', async () => {
    await connect()
    const res = await request(app).get(`/books/id/667d016ca42508b9740742e2`)
    console.log(res.text)
    expect(res.statusCode).toBe(200)
    expect(res.text).toEqual('{"_id":"667d016ca42508b9740742e2","isbn":"9780547928210","book_title":"Lord of the Rings: Fellowship of the Ring","authors":["J.R.R Tolkien"],"language":"English","created_at":"2024-06-27T06:00:00.000Z"}')
  })

  test('responds to /books/title/:title', async () => {
    await connect()
    const res = await request(app).get(`/books/title/Lord of the Rings: Fellowship of the Ring`)
    console.log(res.text)
    expect(res.statusCode).toBe(200)
    expect(res.text).toEqual('[{"_id":"667d016ca42508b9740742e2","isbn":"9780547928210","book_title":"Lord of the Rings: Fellowship of the Ring","authors":["J.R.R Tolkien"],"language":"English","created_at":"2024-06-27T06:00:00.000Z"}]')
  })

  test('responds to /books/author/:author', async () => {
    await connect()
    const res = await request(app).get(`/books/author/J.R.R Tolkien`)
    console.log(res.text)
    expect(res.statusCode).toBe(200)
    expect(res.text).toEqual('[{"_id":"667d016ca42508b9740742e2","isbn":"9780547928210","book_title":"Lord of the Rings: Fellowship of the Ring","authors":["J.R.R Tolkien"],"language":"English","created_at":"2024-06-27T06:00:00.000Z"},{"_id":"669c2260f40b6e3c9db33722","isbn":"9780618002238","book_title":"The Two Towers","authors":["J.R.R Tolkien"],"language":"English","created_at":"2024-07-20T20:47:28.984Z","__v":0}]')
  })

  test('responds to /books/isbn/:isbn', async () => {
    await connect()
    const res = await request(app).get(`/books/isbn/9780547928210`)
    console.log(res.text)
    expect(res.statusCode).toBe(200)
    expect(res.text).toEqual('{"_id":"667d016ca42508b9740742e2","isbn":"9780547928210","book_title":"Lord of the Rings: Fellowship of the Ring","authors":["J.R.R Tolkien"],"language":"English","created_at":"2024-06-27T06:00:00.000Z"}')
  })

  test('responds to /books/', async () => {
    await connect()
    const res = await request(app).get(`/books/`)
    console.log(res.text)
    expect(res.statusCode).toBe(200)
    expect(res.text).toEqual('[{"_id":"667d016ca42508b9740742e2","isbn":"9780547928210","book_title":"Lord of the Rings: Fellowship of the Ring","authors":["J.R.R Tolkien"],"language":"English","created_at":"2024-06-27T06:00:00.000Z"},{"_id":"669c2260f40b6e3c9db33722","isbn":"9780618002238","book_title":"The Two Towers","authors":["J.R.R Tolkien"],"language":"English","created_at":"2024-07-20T20:47:28.984Z","__v":0},{"_id":"669c485811365859bd5ed2b5","isbn":"9780446310789","book_title":"To Kill a Mockingbird","authors":["Harper Lee"],"language":"English","created_at":"2024-07-20T23:29:28.433Z","__v":0},{"_id":"669c48cd11365859bd5ed2b8","isbn":"9780451526342","book_title":"Animal Farm: 75th Anniversary Edition","authors":["George Orwell","Russell Baker"],"language":"English","created_at":"2024-07-20T23:31:25.113Z","__v":0},{"_id":"669c496711365859bd5ed2bd","isbn":"9781451673319","book_title":"Fahrenheit 451","authors":["Ray Bradbury"],"language":"English","created_at":"2024-07-20T23:33:59.628Z","__v":0},{"_id":"669c49a211365859bd5ed2bf","isbn":"9781505313109","book_title":"White Fang","authors":["Jack London"],"language":"English","created_at":"2024-07-20T23:34:58.264Z","__v":0},{"_id":"669c49e311365859bd5ed2c1","isbn":"9781512308051","book_title":"Frankenstein","authors":["Mary Shelley"],"language":"English","created_at":"2024-07-20T23:36:03.183Z","__v":0},{"_id":"669c4af811365859bd5ed2c3","isbn":"9780307475411","book_title":"Don Quijote de la Mancha (Spanish Edition)","authors":["Miguel De Cervantes"],"language":"Spanish","created_at":"2024-07-20T23:40:40.229Z","__v":0},{"_id":"669c4b3e11365859bd5ed2c5","isbn":"9781116549393","book_title":"Les Miserables (French Edition)","authors":["Victor Hugo"],"language":"French","created_at":"2024-07-20T23:41:50.540Z","__v":0}]')
  })

})