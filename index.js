const express = require("express");
const app = express ();

app.get("/", (req, res) => {
  res.send("Cac Deploy!!");
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("http://localhost:${PORT}"));