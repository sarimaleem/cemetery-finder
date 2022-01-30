const express = require("express");
const router = express.Router();
const sqlite3 = require("sqlite3");
const people = new sqlite3.Database("./people.db");
const people = new sqlite3.Database("./admin.db");

router.post("/add", (req, res) => {
  const userData = req.body;

  if (userData.first === undefined || userData.last === undefined)
    return res.status(400).json({ msg: "bad body" });

  people.run(
    "INSERT INTO people (id, first, last) VALUES (?, ?, ?);",
    parseInt(Math.random() * 1000000),
    userData.first,
    userData.last
  );

  res.status(201).json({ msg: "object created" });
});

router.post("/modify", (req, res) => {
  // TODO 
})

router.delete("/delete", (req, res) => {
  // TODO 
})

router.post("/add_user", (req, res) => {
   const userData = req.body;

  if (userData.email === undefined || userData.password === undefined)
    return res.status(400).json({ msg: "bad body" });

  people.run(
    "INSERT INTO people (email, password) VALUES (?, ?);",
    userData.email,
    userData.password,
  );

  res.status(201).json({ msg: "object created" });
})

module.exports = router;
