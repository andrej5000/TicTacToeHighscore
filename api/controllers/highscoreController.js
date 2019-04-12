'use strict';

const mongoose = require('mongoose');
const Highscore = mongoose.model('Highscores');


exports.getList = function (request, response) {

    //console.log('LIST SCORE CALLED');

    Highscore.find({}, function (error, score) {

        handleError(error, response);

        response.json(score);
    })
};


exports.save = function (request, response) {

    //console.log('CREATE SCORE CALLED');

    const new_score = new Highscore(request.body);

    new_score.save(function (error, score) {

        handleError(error, response);

        response.json(score);
    })
};


exports.getById = function (request, response) {

    Highscore.findById(request.params.scoreId, function (error, score) {

        handleError(error, response);

        response.json(score);
    });
};


exports.updateById = function (request, response) {

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


exports.deleteById = function (request, response) {

    Highscore.remove(
        {
            _id: request.params.scoreId
        },
        function (error, score) {

            handleError(error, response);

            response.json({
                message: 'Score ´' + request.params.scoreId + '´ successfully deleted'
            });
        }
    )
};


const handleError = function (error, response) {

    if (error) {
        response.send(error);
    }
};
