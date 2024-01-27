const express = require("express");
const cors = require("cors");
const connectToMongo = require("./db");
require("dotenv").config();

const app = express();

connectToMongo();

app.use(cors());
app.use(express.json());

// Available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`inotebook backend listening on port ${port}`);
});
