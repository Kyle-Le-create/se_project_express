const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const mainRouter = require("./routes/index");
// const auth = require("./middlewares/auth");

const app = express();
const { PORT = 3001 } = process.env;

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(console.error);

app.use(cors());

app.use(express.json());

// app.use((req, res, next) => {
//   req.user = {
//     _id: "66f31b54e63b270285cf1a9b",
//   };
//   next();
// });

app.use("/", mainRouter);

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
