'use strict';

const mongoose = require('mongoose');
const Highscore = mongoose.model('Highscores');


exports.list_all_scores = function (request, response) {

    Highscore.find({}, function (error, score) {

        handleError(error, response);

        response.json(score);
    })
};


exports.create_score = function (request, response) {

    const new_score = new Highscore(request.body);

    new_score.save(function (error, score) {

        handleError(error, response);

        response.json(score);
    })
};


exports.read_score = function (request, response) {

    Highscore.findById(request.params.scoreId, function (error, score) {

        handleError(error, response);

        response.json(score);
    });
};


exports.update_score = function (request, response) {

    Highscore.findOneAndUpdate(
        {
            _id: request.params.scoreId
        },
        request.body,
        {
            new: true
        },
        function (error, score) {

            handleError(error, response);

            response.json(score);
        }
    );
};


exports.delete_score = function (request, response) {

    let playerName = '';

    Highscore.findById(request.params.scoreId, function (error, score) {

        handleError(error);

        playerName = score.name;
    });

    Highscore.remove(
        {
            _id: request.params.scoreId
        },
        function (error, score) {

            handleError(error, response);

            response.json({
                message: 'Score ´' + playerName + '´ successfully deleted'
            });
        }
    )
};


const handleError = function (error, response) {

    if (error) {
        response.send(error);
    }
};
