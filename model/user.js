const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  display_name: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('User', UserSchema);
