import User from "../../models/authSchema.js";
import bcrypt from "bcrypt";

//new user register form
export const register = async (req, res) => {
  const { name, lastName, age, number, email, password } = req.body;
  try {
    if (!name|| !age || !number || !email || !password) {
      return res.status(404).send({ message: "please fill the form" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .send({ message: `sorry!,${email} this email already exsisted` });
    }
    const solid = await bcrypt.hash(password, 8);
    const users = await User.insertOne({
      name: name,
      lastName: lastName,
      age: age,
      number: number,
      email: email,
      password: solid,
    });
    res.status(200).send({ message: "user is created" });
    await users.save();
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "internel server issue" });
  }
};
//find the use and jwt genarate

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
  }
};
