const game = require('../game');


function demo() {
    game.state.add('demo', function () {
        this.preload = function () {
            game.load.image('munny', require('../img/mummy37x45.png'));
        }
        this.create = function () {
            game.add.image(0, 0, 'munny');
        }
    });
}


module.exports = demo;