const express = require("express");
const router = express.Router();
const sqlite3 = require("sqlite3");
const Fuse = require("fuse.js");
const db = new sqlite3.Database("./people.db");

router.get("/", (req, res) => {
  const query = req.body.query;

  db.all(
    "SELECT id, first, last, first || ' ' || last AS fullname FROM people",
    (err, rows) => {
      if (err != null) {
        return res.status(400).json({ msg: "query failed" });
      }

      const searcher = new Fuse(rows, {
        keys: ["first", "last", "fullname"],
      });

      results = searcher.search(query);
      return res.status(200).json(results);
    }
  );
});

module.exports = router;
