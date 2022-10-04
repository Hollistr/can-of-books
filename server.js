'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

// bring in mongoose
const mongoose = require('mongoose');

const app = express();
app.use(cors());

// access mongoose
mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongo connection error'));
db.once('open', function() {
    console.log('Mongoose is connected to Mongo');
});

const Book = require('./models/book.js');

const PORT = process.env.PORT || 3003
app.listen(PORT, () => console.log(`listening on ${PORT}`));

// endpoints
app.get('/test', (req, res) => {

  response.send('test request received')
    res.status(200).send('Welcome Book Lovers!')
});

app.get('/book', getBook);

async function getBook(req,res) {
  try {
    // queries mongo book-db database
    const results = await Book.find();
    res.status(200).send(results);

  } catch (error) {
    res.status(500).send(error);
  }
}
