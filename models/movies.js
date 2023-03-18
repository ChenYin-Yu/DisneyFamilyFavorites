const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define schema
const movieSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type:String,
        required: true
    }
}, {timestamps: true});

const Movie = mongoose.model('Movie', movieSchema) 
module.exports = Movie;