const express = require('express');
const router = express.Router();
let newPlayerModel = require('../models/newPlayerModal');

// Get player list thats been posted

router.get('/', (req, res) => {
  newPlayerModel
    .find({})
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => res.status(400).json({ Error: err }));
});

module.exports = router;
