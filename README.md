# TextbookExchange-FinalProject

This project is an API for a textbook exchange progam.

## Conventions

- use lower **`camelCase`** for js
- use **`snake_case`** to store data 
  - *e.g.* `book_title`
- use **`kebab-case`** for routes
  - *e.g.* `by-title`

## Functions

### /controllers

#### user.js
- createUser
  - Create a new user
- getAllUsers
  - Get all users
- getUserById
  - Get a single user by ID
- updateUser
  - Update a user by ID
- deleteUser
  - Delete a user by ID
- loginUser
  - Placeholder for login
- logoutUser
  - Placeholder for logout

#### posts.js
- getAllPosts
- getPostByTitle
- getPostByISBN
- createPost
- updatePost
- deletePost