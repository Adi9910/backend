const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
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
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

//generate token
schema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ email: this.email }, "myschema");
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

//for hashing / no to display password
// schema.pre("save", async function (next) {
//   if (this.isModified) {
//     this.password = bcrypt.hash(this.password, 12);
//   }
//   next();
// });

const User = mongoose.model("NAME", schema);

module.exports = User;
