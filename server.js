// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const users = require('./routes/user');

const app = express();
const PORT = process.env.PORT || 5000;
  
  app.use(cors());
  app.use(express.json());
  
  mongoose.connect('mongodb://127.0.0.1:27017/img-board', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then((() => console.log("Connected to DB")))
    .catch(console.error);

app.use('/users', users)

// // start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});