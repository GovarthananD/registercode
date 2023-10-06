const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authroute");

const app = express();

const PORT = 3000;
const MONGO_URL =
  "mongodb+srv://thalagoa2205:WLAdiQ3g8559JZ7G@cluster0.8h7vq3y.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(MONGO_URL).then(() => {
  console.log("Database connected");
});

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.use(authRoutes);
app.listen(PORT, () => console.log("Server running on PORT", PORT));
