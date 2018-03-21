const Phaser = require('Phaser');
const states = require('../state/index');

function start() {
    const game = new Phaser.Game(1013, 734, Phaser.CANVAS, 'direct');

    for (let key in states) {
        game.state.add(key, states[key]);
    }
}



module.exports.start = start;