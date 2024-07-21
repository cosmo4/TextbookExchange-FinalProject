# TextbookExchange-FinalProject

This project is an API for a textbook exchange progam.

## Conventions

- use lower **`camelCase`** for js
- use **`snake_case`** to store data
  - _e.g._ `book_title`
- use **`kebab-case`** for routes
  - _e.g._ `by-title`

## Misc. Credit

The line:
`"test": "node --experimental-vm-modules node_modules/.bin/jest --coverage"` in package.json is copied from https://fek.io/blog/how-to-add-unit-testing-to-express-using-jest/

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

#### books.js

- checkIsbn
  - a function to check if an isbn is valid
- placeholderRoute
  - A placeholder function for not-yet-implimented routes
- postBookRoute
  - Posts a new book
- getAllRoute
  - Gets all the books
- getByIsbnRoute
  - Gets a book according to the given isbn
- getByIdRoute
  - Gets a book according to the given id
- getByTitleRoute
  - Gets book(s) according to the given id
- getByAuthorRoute
  - Gets book(s) according to the given author
- putRoute
  - Puts body data to a book according to the given id
- deleteRoute
  - deletes a book according to the given id
