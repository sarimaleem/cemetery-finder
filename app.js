const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("people.db");

// TODO: figure out how this works?
// app.use(express.static(path.join(__dirname, 'frontend/')))

//Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "frontend")));
app.set('views', './frontend')

//Simple requests
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/home.html"));
});

app.post("/", (req, res) => {
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

//Search functionality
app.use("/search", require("./search/search_api"));

app.listen(port, () => {
  console.log(`listening at ${port}`);
});
