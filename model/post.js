const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    post_content: {
      type: String,
      required: true,
    },
    book_condition: {
      type: String,
      required: true,
    },
    // created_at: {
    //   type: Date,
    //   default: Date.now,
    // },
    // updated_at: {
    //   type: Date,
    //   default: Date.now,
    // },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    book_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["available", "sold", "reserved"],
      default: "available",
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
