const express = require('express');
const router = express.Router();
const fs = require('fs');
let newPlayerModel = require('../models/newPlayerModal');

// radera en spelare från databasen

router.delete('/deletePlayer/:id', (req, res) => {
  const id = req.params.id;
  const imageId = req.body.imgId;

  fs.unlinkSync(`uploads/${imageId}`);

  newPlayerModel
    .findOneAndDelete({ _id: id })
    .then((deletedPlayer) => {
      console.log(deletedPlayer, 'deletedpl');
      res.status(200).json(deletedPlayer);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
