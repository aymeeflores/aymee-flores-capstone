const express = require("express");
const db = require("./database");
const app = express();
const cors = require("cors");

var corOptions = {
  origin: "*",
  optionSuccessStatus: 200,
};

app.use(cors());
app.use(express.json());

// middlewares
const valid_token = require("./middleware/valid_token");
const is_auth = require("./middleware/is_auth");

// routes import
const loginRoutes = require("./routes/login");
const locationRoutes = require("./routes/location");
const messageRoutes = require("./routes/messages");

// default
app.get("/", (req, res) => {
  res.json({ message: "hello from api" });
});
// static files :: avatars
app.use(express.static("public"));

// routes use
app.use("/login", loginRoutes);
app.use("/messages", valid_token, is_auth, messageRoutes);
app.use("/location", valid_token, is_auth, locationRoutes);

// open server
app.listen(8080, () => {
  console.log("Listening on por 8080");
});
