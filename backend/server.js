const express = require("express");
const dotenv = require("dotenv");

// dotenv.config();

const app = express();

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Server started on port:${port}`);
});
