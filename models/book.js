// Made using code from these sources:
//  - Henry Bondah's ./user.js file
//  - https://www.youtube.com/watch?v=SBvmnHTQIPY
//  - https://mongoosejs.com/docs/schematypes.html#arrays

const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  isbn: { type: String, required: true, unique: true },
  book_title: { type: String, required: true },
  authors: { type: [String], required: true },
  laguage: { type: String, required: true },
  created_at: { type: Date, default: Date.now},
});

module.exports = mongoose.model('Book', BookSchema);