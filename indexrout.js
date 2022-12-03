const express = require("express");
const cors = require("cors");
const router = require("./rout");
const app = express();
app.use(express.json());
const middleware = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
};
app.use(cors());
app.use(middleware);
app.use(router);

app.listen(6500, () => console.log("server running at port: 5000"));
