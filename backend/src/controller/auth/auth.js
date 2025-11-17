import User from "../../models/authSchema.js";
import bcrypt from "bcrypt";

//new user register form
export const register = async (req, res) => {
  const { name, lastName, age, number, email, password } = req.body;
  try {
    if (!name|| !age || !number || !email || !password) {
      return res.status(404).json({ message: "please fill the form" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ message: `sorry!, ${email} this email already exsisted` });
    }
    const solid = await bcrypt.hash(password, 8);
    const users = await User.create({
      name: name,
      lastName: lastName,
      age: age,
      number: number,
      email: email,
      password: solid,
    });
    res.status(200).json({ message: "user is created" });
    await users.save();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internel server issue" });
  }
};
//find the use and jwt genarate

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
  }
};
