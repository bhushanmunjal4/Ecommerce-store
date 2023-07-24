import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  try {
    const { username, gender, password } = req.body;

    const newUser = new User({
      username,
      gender,
      password,
    });

    const savedUser = await newUser.save();

    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user with the provided username
    const user = await User.findOne({ username });

    // If the user doesn't exist, return an error
    if (!user) {
      return res.status(404).json({ error: "Invalid username or password" });
    }

    // Compare the provided password with the hashed password stored in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // If the password is not valid, return an error
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    // Password is valid, login successful
    res.json({ success: true, username: user.username });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const checkUsernameAvailability = async (req, res) => {
  try {
    const { username } = req.query;
    const existingUser = await User.findOne({ username });

    res.json({ available: !existingUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  registerUser,
  checkUsernameAvailability,
  loginUser,
};
