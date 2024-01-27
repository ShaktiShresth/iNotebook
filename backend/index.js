const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");

connectToMongo();

const app = express();

app.use(cors());
app.use(express.json());

//Available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(process.env.PORT, () => {
  console.log(
    `inotebook backend listening on port ${process.env.PORT || 5000}`
  );
});
