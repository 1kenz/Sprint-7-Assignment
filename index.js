const express = require("express");
const path = require("path");

const HomeRouter = require("./routes/HomeRouter");

const RegisterRouter = require("./routes/RegisterRouter");

const port = process.env.port || 5000;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", HomeRouter);
app.get("/register", RegisterRouter);

app.listen(port, () => {
  console.log(`I'm listening on port ${port}`);
});
