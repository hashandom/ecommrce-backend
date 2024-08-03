const userModel = require('../../models/userModel');
const bcrypt = require('bcryptjs');

const userSignUpController = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email) {
      throw new Error('Please provide the email');
    } 
    if (!password) {
      throw new Error('Please provide the password');
    } 
    if (!name) {
      throw new Error('Please provide the name');
    }

    const user = await userModel.findOne({ email });
    if (user) {
      throw new Error('User already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    if (!hashPassword) {
      throw new Error('Something went wrong with hashing the password');
    }

    const paylaod = {
      ...req.body,
      password:hashPassword,
      role : "GENERAL"
    }
    const userData = new userModel(paylaod);

    const savedUser = await userData.save();

    res.status(201).json({
      data: savedUser,
      success: true,
      error: false,
      message: 'User created successfully'
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
      error: true,
      success: false
    });
  }
};

module.exports = userSignUpController;
