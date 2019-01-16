const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let pokedex = {
  nextId: 10,
  data: [
    {
      id: 1,
      name: "Snivy",
      type: "Grass"
    },
    {
      id: 2,
      name: "Tepig",
      type: "Fire"
    },
    {
      id: 3,
      name: "Oshawott",
      type: "Water"
    },
    {
      id: 4,
      name: "Patrat",
      type: "Normal"
    },
    {
      id: 5,
      name: "Herdier",
      type: "Normal"
    },
    {
      id: 6,
      name: "Liepard",
      type: "Dark"
    },
    {
      id: 7,
      name: "Pansear",
      type: "Fire"
    },
    {
      id: 8,
      name: "Palpitoad",
      type: "Water"
    },
    {
      id: 9,
      name: "Sandile",
      type: "Dark"
    }
  ]
};

app.get("/", (req, res) => {
  res.send({
    message: "Hello World",
    headers: req.headers
  });
});

// Get All Pokemon Name

app.get("/pokedex", (req, res) => {
  res.send({
    count: pokedex.data.length,
    data: pokedex.data
  });
});

// Search Pokemon by id

app.get("/pokedex/:id(\\d+)", (req, res) => {
  const queryId = req.params.id;

  const findPokemon = pokedex.data.filter(pokemon => {
    return pokemon.id === Number(queryId);
  });

  res.send({ data: findPokemon });
});

// Search Pokemon by Name and Type

app.get("/pokedex/search", (req, res) => {
  const queryName = req.query.name || ""; // if queryName haven't value , default value is ""
  const queryType = req.query.type || ""; // if .includes have "" value , default value will be "true"

  const findPokedex = pokedex.data.filter(pokemon => {
    return (
      pokemon.name.toLowerCase().includes(queryName.toLowerCase()) &&
      pokemon.type.toLowerCase().includes(queryType.toLowerCase())
      // every name at data have "" value
    );
  });

  res.send({
    data: findPokedex
  });
});

// Add New Pokemon

app.post("/pokedex", (req, res) => {
  const newPokemon = {
    id: pokedex.nextId,
    name: req.body.name,
    type: req.body.type
  };

  const newPokemons = {
    nextId: pokedex.nextId + 1,
    data: pokedex.data.concat(newPokemon)
  };

  pokedex = newPokemons;

  res.send({
    newData: newPokemon,
    data: pokedex
  });
});

// Delete all pokemon

app.delete("/pokedex", (req, res) => {
  const deletePokemon = pokedex.data.splice(0, pokedex.data.length);
  console.log(deletePokemon);

  res.send({
    data: pokedex.data
  });
});

// Delete pokemon by id

app.delete("/pokedex/:id", (req, res) => {
  const deletePokemon = pokedex.data.filter(
    item => item.id !== Number(req.params.id)
  );

  console.log(deletePokemon);

  pokedex.data = deletePokemon;

  res.send({
    data: pokedex.data
  });
});

// Update data pokemon by Id

app.put("/pokedex/:id", (req, res) => {
  pokedex.data[req.params.id - 1] = {
    id: req.params.id,
    name: req.body.name,
    type: req.body.type
  };

  res.send({
    data: pokedex.data
  });
});

app.listen(port, () => console.log("Server running at localhost:3000"));
