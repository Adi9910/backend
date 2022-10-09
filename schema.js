const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//for hashing / no to display password
// schema.pre("save", async function (next) {
//   if (this.isModified) {
//     this.password = bcrypt.hash(this.password, 12);
//   }
//   next();
// });

const User = mongoose.model("NAME", schema);

module.exports = User;


