const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const bars = require("./controllers/bars");

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
