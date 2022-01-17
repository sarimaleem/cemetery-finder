const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("people.db");

//Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "frontend")));

//Simple requests
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/home.html"));
});


//Search functionality
app.use("/search", require("./routes/search"));
app.use("/admin", require("./routes/admin"));

app.listen(port, () => {
  console.log(`listening at ${port}`);
});
