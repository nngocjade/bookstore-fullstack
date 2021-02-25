const User = require("../models/user");

// CREATE USER
const createUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    if (!confirmPassword) {
      return res.status(400).json({
        success: false,
        message: `please confirm password`,
      });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: `password does not match!`,
      });
    }

    const user = new User({
      name,
      email,
      password,
    });

    await user.save();

    accessToken = await user.generateToken();

    res.status(201).json({
      success: true,
      data: user,
      token: accessToken,
      message: `User ${user.name} created!`,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

module.exports = {
  createUser,
};
