const express = require("express");
const consign = require("consign");
const app = express();
const PORT = 3000;
const path = require("path");
const bodyParser = require("body-parser");
const Taoka = require("./app/resources/Taoka");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

new Taoka("Host", { name: String, hostgroup: String, so: String }).with(app);

// consign()
//   .include("./app/routes")
//   .into(app);

app.listen(PORT, () => {
  console.log("Server listening on port...", PORT);
});
