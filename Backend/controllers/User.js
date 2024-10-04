const User = require('../models/USer');

const usercreate = async (req, res) => {
    const { name, email, password, phoneNumber } = req.body;
    try {
      const user = new User({ name, email, password, phoneNumber });
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: 'Error creating user', error });
    }
  }

const searchUser = async (req, res) => {
    try {
      const user = await User.findById(req.params.id).populate('bookings');
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching user', error });
    }
  }

  const deleteUser = async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting user', error });
    }
  }

module.exports = {usercreate, searchUser, deleteUser};