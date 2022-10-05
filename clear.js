'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

// check name
mongoose.connect(process.env.DB_URL);

// check name
const Book = require('./models/book');

async function clear() {
    try {
        await Book.deleteMany({});
        console.log('Books Cleared');
    } catch (err) {
        console.error(err);
    } finally {
        mongoose.disconnect();
    }
}

clear();