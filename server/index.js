const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const {
  getCompliment,
  getFortune,
  getContinent,
  getAnimal,
  getZodiac,
  getUsers,
  // createUser,
  // updateUser,
  deleteUser
} = require('./controller');

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/continent", getContinent);
app.get("/api/animal", getAnimal);
app.get("/api/zodiac", getZodiac);

app.get("/api/user", getUsers);
// app.post("/api/user", createUser);
// app.put("/api/user/:id", updateUser);
app.delete("/api/user/:id", deleteUser);


app.listen(4000, () => console.log("Server running on 4000"));
