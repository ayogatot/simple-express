# Simple Express

## Install dependencies :

```
yarn
```

## Start server with `node` :

```
node index.js
```

## API Endpoints

Pokedex:

| Route                           | HTTP Verb | Description                  |
| ------------------------------- | --------- | ---------------------------- |
| `/pokedex`                      | `GET`     | Get all the pokedex          |
| `/pokedex/:id`                  | `GET`     | Get a single pokedex         |
| `/pokedex`                      | `POST`    | Save a new pokedex           |
| `/pokedex/search?name=:name`    | `GET`     | Search pokedex by name       |
| `/pokedex`                      | `DELETE`  | Remove all the pokedex       |
| `/pokedex/:id`                  | `DELETE`  | Remove a pokedex             |
| `/pokedex/:id`                  | `PUT`     | Update an item with new info |