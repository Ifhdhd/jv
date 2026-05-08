// server.js

const express = require("express");
const path = require("path");

const app = express();

// PORT dari Render
const PORT = process.env.PORT || 3000;

// serve static file
app.use(express.static(__dirname));

// handle semua route ke index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// listen
app.listen(PORT, () => {
  console.log("Server jalan di port " + PORT);
});
