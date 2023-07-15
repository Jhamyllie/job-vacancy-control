const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const createUser = async (req, res) => {
  const hashPassword = bcrypt.hashSync(req.body.password, 10);
  req.body.password = hashPassword;

  const user = new User(req.body);
  try {
    const savedUser = await user.save();
    res.status(201).json({
      message: "User created successfully", savedUser
    });
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

const getAllUser = async (_req, res) => {
  try {
    const allUser = await User.find({}, null);
    res.status(200).json(allUser);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    const message = `The user with id ${id}, was successfully deleted`;
    res.status(200).json({ message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message})
  }
}

const updateUsers = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phone
    } = req.body;

    const { id } = req.params;
    const findUser = await User.findById(id);
    if(!findUser){
      return res.status(404).json({message: "Usuário não encontrado"});
    }
    findUser.name = name || findUser.name;
    findUser.email = email || findUser.email;
    findUser.password = password || findUser.password;
    findUser.phone = phone || findUser.phone;
    const savedUser = await findUser.save();
    res.status(200).json({message: "User updated successfully", savedUser});
  } catch (error) {
    console.log(error);
    res.status(500).json({message: error.message});
  }
}

module.exports = {
  createUser,
  getAllUser,
  updateUsers,
  deleteUserById,
}
