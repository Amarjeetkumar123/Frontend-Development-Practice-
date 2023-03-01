const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
mongoose.set("strictQuery", false);
const PORT = 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

// Database Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/AuthDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("Something Went Wrong");
    console.log(err);
  });

// Create Schema

const UsersSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("users", UsersSchema);

// const element = new user({
//     name: "amarjeet",
//     email: "amar@gmail.com",
//     password:"12345"
// })

// element.save();

// Login Route
app.post("/login", async (req, res) => {
  
  const { email, password } = req.body;

  await User.findOne({ email: email }, (err, data) => {

    if (data) {
      if (password === data.password) {
        res.send({ message: "Successfully Login", user: data });
      } else {
        res.send({ message: "Wrong Password" });
      }
    } else {
      res.send({ message: "User not exits" });
    }
  });

});

// signUp Route
app.post("/signup", (req, res) => {

  const { name, email, password } = req.body;
  console.log(name);
  User.findOne({ email: email }, (err, data) => {
    
    if (data) {
      res.send({ message: "User already registered, Please go to the login" });
    } else {
      const element = new User({
        name: name,
        email: email,
        password: password,
      });

      element.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Succesfully registered, please login now" });
        }
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
