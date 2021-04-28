const express = require('express');
const router = express.Router();
const playerTemplateCopy = require('../models/newPlayerModal');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

// post desc image and name for player

router.post('/', upload.single('image'), (req, res) => {
  const playerDesc = new playerTemplateCopy({
    name: req.body.name,
    desc: req.body.description,
    img: req.file.filename,
  });
  playerDesc
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

module.exports = router;
