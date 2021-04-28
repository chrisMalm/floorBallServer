const express = require('express');
const router = express.Router();
let loginModel = require('../models/loginModel');
const bcrypt = require('bcrypt');

// logga in som admin

router.post('/', async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await loginModel.findOne({
      username,
    });

    if (!existingUser)
      return res.status(404).json({ message: 'User dont exist.' });

    let result = bcrypt.compareSync(password, existingUser.password);

    if (!result) {
      return res.status(400).json({
        message: 'Incorrect Password !',
      });
    } else {
      return res.status(200).json({ msg: 'cool, youre in!!', loggedIn: true });
    }
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});
module.exports = router;
