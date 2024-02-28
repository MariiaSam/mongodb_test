import bcrypt from "bcrypt";

import User from "../models/user.js";

async function register(req, res, next) {
  const { name, email, password } = req.body;

  //   const normalizedEmail = normalize(email)
  const normalizedEmail = email.toLowerCase();
  try {
    const user = await User.findOne({ email: normalizedEmail }); //щоб найти корстувача email. Фільт буде тиким,  знайди док, в якого поле  email, буде відповідати значення, яке мені користувач відправив у змінні email

    //якщо не match - не співпадає, то
    if (user !== null) {
      return res.status(409).send({ message: "User already registered" });
    }
    const passwordHash = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email: normalizedEmail,
      password: passwordHash,
    });

    // console.log(result);

    res.status(201).send({ message: "Register successfully" });
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  const { email, password } = req.body; //поверну мені користувача в якого мейл та пароль дорівнює цьому значеню
  const normalizedEmail = email.toLowerCase();

  try {
    const user = await User.findOne({ email: normalizedEmail });

    if (user === null) {
      console.log("Email");
      return res
        .status(401)
        .send({ message: "Email or password is incorrect" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch === false) {
      console.log("Password");
      return res
        .status(401)
        .send({ message: "Email or password is incorrect" });
    }
    // res.end("Login successful");
    res.end({token: "TOKEN"});

  } catch (error) {
    next(error);
  }
}

export default { register, login };
