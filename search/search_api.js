const express = require("express");
const router = express.Router();
const sqlite3 = require("sqlite3");
const fuzzysort = require("fuzzysort");
const db = new sqlite3.Database("./people.db");

router.get("/", (req, res) => {
  const query = req.body.query;
  db.all(
    "SELECT id, first, last, first || ' ' || last AS fullname FROM people",
    (err, rows) => {
      const searchResults = fuzzysort.go(query, rows, { key: "fullname" });
      console.log(searchResults);
      res.status(200).json(searchResults);
    }
  );
});

module.exports = router;
