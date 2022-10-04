'use strict';

const { default: mongoose } = require('mongoose');

require('dotenv').config();
mongoose.connect(process.env.DB_URL);

const Book = require('./models/book.js');

async function seed() {
    // title: { type: String, required: true },
    // description: { type: String, required: true },
    // status: { type: String, required: true}
    await Book.create({
        title: 'The Alchemist',
        description: 'description',
        status: 'status',
    })

    await Book.create({
        title: 'The Four Agreements',
        description: 'description',
        status: 'status',
    })

    await Book.create({
        title: 'The Mastery of Love',
        description: 'description',
        status: 'status',
    })

    mongoose.disconnect();
}

seed();
