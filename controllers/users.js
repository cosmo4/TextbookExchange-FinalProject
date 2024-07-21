

const User = require('../models/user');

// Check if user exists, if not, create a new user
exports.checkAndCreateUser = async (auth0User) => {
  try {
    const { nickname: display_name, given_name: first_name, family_name: last_name, email } = auth0User;
    let user = await User.findOne({ email });

    if (!user) {
      const newUser = new User({ display_name, first_name, last_name, email });
      await newUser.save();
      console.log('New user created:', newUser);
    } else {
      console.log('User already exists:', user);
    }
  } catch (error) {
    console.error('Error in checkAndCreateUser:', error);
    throw error;
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { display_name, first_name, last_name, email } = req.body;
    const newUser = new User({ display_name, first_name, last_name, email });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a user by ID
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedUser) return res.status(404).json({ message: 'User not found' });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Placeholder for login
exports.loginUser = (req, res) => {
  res.status(501).json({ message: 'Not implemented' });
};

// Placeholder for logout
exports.logoutUser = (req, res) => {
  res.status(501).json({ message: 'Not implemented' });
};
