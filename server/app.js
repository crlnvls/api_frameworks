const express = require("express");
const cors = require("cors");

const data = require("./data");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Zoo APIs");
});

app.get("/animals", (req, res) => {
  let animals = data;

  res.json({
    animals: animals.map((f) => f["animal"]),
  });
});

app.get("/animals/:id", (req, res) => {
  // res.send(req.params.id);

  //Extract the paramenter from the URL
  const id = req.params.id;

  // Filter the data for the ice cream with that id
  const filteredData = data.filter((f) => f["id"] == id);

  if (filteredData.length == 1) {
    // Send the first filtered result
    res.json({
      animal: filteredData[0],
    });
  } else {
    res.status(404).json({
      error: "No animal :( ",
    });
  }
});

app.post("/animals", (req, res) => {
  const newAnimals = req.body;
  newAnimals["id"] = data.length + 1;
  data.push(newAnimal);

  res.status(201).json({
    success: true,
    animal: newAnimal,
  });
});

module.exports = app;
