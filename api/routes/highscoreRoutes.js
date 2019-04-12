'use strict';

module.exports = function (app) {

    const highscore = require('../controllers/highscoreController');

    // highscore routes
    app.route('/highscore')
        .get(highscore.getList)
        .post(highscore.save);

    app.route('/highscore/:scoreId')
        .get(highscore.getById)
        .put(highscore.updateById)
        .delete(highscore.deleteById);
};
