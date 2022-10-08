const mongoose = require("mongoose");
const db =
  "mongodb+srv://adibaba:NOIoff09@cluster0.9nevc53.mongodb.net/user?retryWrites=true&w=majority";

mongoose
  .connect(db)
  .then(() => {
    console.log("connect success");
  })
  .catch((err) => {
    console.log("err");
  });
