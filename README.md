# Simple Express

## Install dependencies :

```
yarn
```

## Start server with :

```
node index.js
```

## API Endpoints

Pokedex:

| Route                                 | HTTP Verb | Description                        |
| ------------------------------------- | --------- | ---------------------------------- |
| `/pokedex`                            | `GET`     | Get all the pokedex                |
| `/pokedex/:id`                        | `GET`     | Get a single pokedex               |
| `/pokedex`                            | `POST`    | Save a new pokedex                 |
| `/pokedex/search?name=name&type=type` | `GET`     | Search pokedex by name and by type |
| `/pokedex`                            | `DELETE`  | Remove all the pokedex             |
| `/pokedex/:id`                        | `DELETE`  | Remove a pokedex                   |
| `/pokedex/:id`                        | `PUT`     | Update an item with new info       |
