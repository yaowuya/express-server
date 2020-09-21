const express = require("express");

const app = express();

app.use("/iview", express.static(__dirname + "/iview"));

app.get("/", (req, res) => {
  res.send("Hello Iview");
});

app.listen(3008, () => {
  console.log("http://localhost:3008");
});
