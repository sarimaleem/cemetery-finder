const express = require("express");
const router = express.Router();
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./people.db");



app.post("/add", (req, res) => {
  const userData = req.body;

  if (userData.first === undefined || userData.last === undefined)
    return res.status(400).json({ msg: "bad body" });

  db.run(
    "INSERT INTO people (id, first, last) VALUES (?, ?, ?);",
    parseInt(Math.random() * 1000000),
    userData.first,
    userData.last
  );

  res.status(201).json({ msg: "object created" });
});

app.post("/modify", (req, res) => {
  // TODO 
})

app.delete("/delete", (req, res) => {
  // TODO 
})

app.post("/add_user", (req, res) => {
  // TODO 
})


module.exports = router;
