const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.js');

//POST /user  Posts a new user

router.post('/', userController.createUser);

//GET /user Gets all the users
router.get('/', userController.getAllUsers);

//GET /user/login Logs in a user
router.get('/login', userController.loginUser); 

//GET /user/logout Logs out a user
router.get('/logout', userController.logoutUser); 

//GET /user/:id Gets a user according to the given ID
router.get('/:id', userController.getUserById);

//PUT /user/:id Updates a user according to the given ID
router.put('/:id', userController.updateUser);

//DELETE /user/:id Deletes a user according to the given ID
router.delete('/:id', userController.deleteUser);

module.exports = router;