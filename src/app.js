const game = require('./game');
const boot = require('./state/boot');
const demo = require('./state/demo');
boot();
// demo();
game.state.start('boot');
// let arr = ['boot', 'demo'];

// run(arr);



// function run(arr) {
//     game.state.start(arr[0]);
//     arr.reverse();
//     setTimeout(() => {
//         run(arr);
//     }, 1000);
// }
