// https://medium.com/employbl/build-database-relationships-with-node-js-and-mongodb-74e35c315cf

import mongoose from 'mongoose';

import 'src/mongoose.js';

import User from 'src/models/User';
import Account from 'src/models/Account';

// const { Author, Book } = require('../server/models');

async function seedAuthors() {
    console.log('Seeding authors to ' + mongoose.connection.name + '...');

    const authors = [
      { name: 'JK Rowling', bio: 'J.K. Rowling is the author of the much-loved series of seven Harry Potter novels, originally published between 1997 and 2007.' },
      { name: 'Tony Robbins', bio: 'Tony Robbins is an entrepreneur, best-selling author, philanthropist and the nation\'s #1 Life and Business Strategist.' },
    ];

    for (author of authors) {
        var newAuthor = new Author(author);
        await newAuthor.save();
    }

    const a = await Author.find();
    console.log('authors: ', a);
};

async function seedBooks() {
    console.log('Seeding books to ' + mongoose.connection.name + '...');

    const jkRowling = await Author.findOne({ name: 'JK Rowling' });
    const tonyRobbins = await Author.findOne({ name: 'Tony Robbins' });

    let harryPotter = new Book({ title: 'Harry Potter', author: jkRowling._id });
    let awakenGiant = new Book({ title: 'Awaken the Giant Within', author: tonyRobbins._id });

    await harryPotter.save();
    await awakenGiant.save();

    jkRowling.books.push(harryPotter);
    tonyRobbins.books.push(awakenGiant);

    await jkRowling.save();
    await tonyRobbins.save();
};

seedAuthors();
seedBooks();
