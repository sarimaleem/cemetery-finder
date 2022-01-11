const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("people.db");

// TODO: figure out how this works?
// app.use(express.static('frontend/'))
app.use(express.json());
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/home.html"));
});

app.post("/", (req, res) => {
    const user = req.body;
    if (user.first === undefined || user.last === undefined) {
        res.status(400).json({ msg: "bad body" });
    } else {
        db.run(
            `insert into people (id, first, last) values (?, ?, ?);`,
            parseInt(Math.random() * 1000000),
            user.first,
            user.last
        );
        db.all("select * from people", (err, rows) => {
            console.log(rows);
        });
        res.status(201).json({ msg: "object created" });
    }
});

app.listen(port, () => {
    port;
    console.log(`listening at ${port}`);
});
