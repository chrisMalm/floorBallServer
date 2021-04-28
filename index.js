const express = require('express');
const app = express();
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const postPlayerDecs = require('./routes/player');
// const getPlayer = require('./routes/playerList');
// const deletePlayer = require('./routes/deletePlayer');
// const signIn = require('./routes/login');

// const cors = require('cors');

// dotenv.config();

const port = process.env.PORT || 4000;

// mongoose.connect(
//   process.env.DATABASE_ACCESS,
//   { useNewUrlParser: true, useUnifiedTopology: true },

//   () => console.log('Db connected')
// );
app.use(express.json());
// app.use(cors());
app.get('/', (req, res) => {
  res.end('hej');
});
// app.use('/uploads', express.static('uploads'));
// app.use('/playerData', postPlayerDecs);
// app.use('/playerList', getPlayer);
// app.use('/deletePlayer/:id', deletePlayer);
// app.use('/signin', signIn);

app.listen(port, () => {
  console.log(`Server running on ${port}, http://localhost:${port}`);
});
