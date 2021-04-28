const mongoose = require('mongoose');

const playerTemplate = new mongoose.Schema({
  name: String,
  desc: String,
  img: String,
});

module.exports = new mongoose.model('image', playerTemplate);
