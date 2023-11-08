import express from "express";
const app = express();

app.listen(3000, () => console.log("listening on port 3000."));

app.get("/hello", (req, res) => {
  console.log(req.headers);
  res.send("Hello.\n");
});
