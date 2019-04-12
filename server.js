'use strict';

const express = require('express'),
    app = express(),
    cors = require('cors'),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Score = require('./api/models/highscoreModel'), // created model loading here
    bodyParser = require('body-parser');


mongoose.Promise = global.Promise;
mongoose
    .connect('mongodb://localhost/TicTacToeHighscoreDB', {
        useNewUrlParser: true
    })
    .catch((error) => {
        console.error(error);
    });

app.options('http://localhost:8080', cors()); // include before other routes
app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

/*app.use(function(request, response) {
    response.status(404).send({url: request.originalUrl + ' not found'});
});*/


const routes = require('./api/routes/highscoreRoutes'); // importing routes
routes(app);

app.listen(port);

console.log(
    '\n----------------------------------------------------------- \n' +
    '==> TicTacToe Highscore RESTful API server started on: ' + port +
    '\n----------------------------------------------------------- \n'
);
