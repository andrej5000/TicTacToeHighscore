'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const HighscoreSchema = new Schema({

    playerName: {
        type: String,
        required: 'Kindly enter the name of the player'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    gameDuration: {
        type: String,
        required: 'Kindly enter a score'
    }
});


module.exports = mongoose.model('Highscores', HighscoreSchema);
