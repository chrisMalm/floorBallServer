const express = require('express');
const router = express.Router();
const fs = require('fs');
let newPlayerModel = require('../models/newPlayerModal');

// radera en spelare från databasen

router.delete('/', (req, res) => {
  const id = req.body.id;

  newPlayerModel
    .findOneAndDelete(id)
    .then((deletedPlayer) => {
      res.status(200).json(deletedPlayer);
      // const DIR = 'uploads';
      // fs.unlinkSync(DIR + '/' + playerImg + '.jpg');
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
