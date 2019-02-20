'use strict';

module.exports = function (app) {

    const highscore = require('../controllers/highscoreController');

    // highscore routes
    app.route('/highscore')
        .get(highscore.list_all_scores)
        .post(highscore.create_score);

    app.route('/highscore/:scoreId')
        .get(highscore.read_score)
        .put(highscore.update_score)
        .delete(highscore.delete_score);
};
