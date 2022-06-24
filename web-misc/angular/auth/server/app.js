const express = require("express");
const { v4: uuid } = require("uuid");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());

const db = {};

app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).send({ message: "credentials not provided" });

  const emailAlreadyExists = Object.entries(db).find((keyValue) => {
    return keyValue[1].email === email;
  });

  if (emailAlreadyExists)
    return res.status(409).send({ message: "email already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = {
    id: uuid(),
    email,
    password: hashedPassword,
  };

  db[user.id] = user;
  res.status(201).send({ user });
});

app.listen(3333, () => {
  console.log("server started at 3333");
});
