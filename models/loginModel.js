const mongoose = require('mongoose');

const LoginTemplate = new mongoose.Schema({
  username: String,
  password: String,
});

module.exports = new mongoose.model('adminUser', LoginTemplate, 'adminUser');
