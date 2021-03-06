const express = require("express");
const jwt = require("jsonwebtoken");
const { v4: uuid } = require("uuid");
const bcrypt = require("bcrypt");

const JWT_SECRET = "mayTheForceBeWithYou";

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

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).send({ message: "credentials not provided" });

  const [, user] =
    Object.entries(db).find((keyValue) => {
      return keyValue[1].email === email;
    }) || [];

  if (!user) {
    return res.status(404).send({ message: "user not found" });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(404).send({ message: "user not found" });
  }

  const token = jwt.sign({ sub: user.id }, JWT_SECRET, { expiresIn: "15m" });
  return res.send({ user, token });
});

app.get("/me", async (req, res) => {
  const authHeader = req.headers?.["authorization"];
  if (!authHeader) {
    return res.status(401).send({ message: "authorization header not found" });
  }

  const [_, token] = authHeader.split(" ");
  if (!token) {
    return res.status(401).send({ message: "auth token not found" });
  }

  let decoded;
  try {
    decoded = jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return res.status(401).send({ message: "invalid token" });
  }

  const user = db[decoded.sub];

  if (!user) {
    return res.status(401).send({ message: "token owner not found" });
  }

  res.send({ user });
});

app.listen(3333, () => {
  console.log("server started at 3333");
});
