const game = require('../game');


function boot() {

    game.state.add('boot', function () {
        let xiu;
        this.init = function () {
            this.stage.backgroundColor = "#f00";

        }

        this.preload = function () {
            game.load.image('thorn', require('../img/thorn_lazur.png'));
            game.load.spritesheet('mummy', require('../img/mummy37x45.png'), 37, 45, 18);
            game.load.audio('xiu', require('../media/bgg.m4a'));
            game.load.image('red', require('../img/apple/a1.png'));
            game.load.image('green', require('../img/apple/b1.png'));
            game.load.image('yellow', require('../img/apple/c1.png'));
        }
        var mg;
        var mummy;

        this.create = function () {
            mg = game.add.image(0, 0, 'thorn');
            mummy = game.add.sprite(game.world.centerX, game.world.centerY, 'mummy', 5);
            mummy.inputEnabled = true;
            mummy.anchor.set(0.5);
            mummy.input.enableDrag();
            mummy.events.onInputDown.add(function () {
                game.add.tween(mummy).to({
                    x: 0,
                    y: 0
                }, 3000, Phaser.Easing.Linear.None, true, 0, Number.MAX_VALUE, true);
                console.log(Phaser.Easing)

            })



            mummy.scale.set(4);
            let anim = mummy.animations.add('walk');
            anim.play(10, true);

            let music = game.add.audio('xiu');
            music.loopFull();

            let apples = game.add.group();
            let appleTypes = ['green', 'red', 'yellow'];
            let appleTimer = game.time.create(true);
            appleTimer.loop(1000, function () {
                let x = Math.random() * game.world.width;
                let type = appleTypes[Math.floor(Math.random() * appleTypes.length)];
                let apple = apples.create(x, 0, type);
                // 设置苹果大小
                var appleImg = game.cache.getImage(type);
                apple.width = game.world.width / 20;
                apple.height = apple.width / appleImg.width * appleImg.height;
                // 设置苹果加入物理运动
                game.physics.enable(apple);
            });
            appleTimer.start();
            game.physics.startSystem(Phaser.Physics.Arcade);
            game.physics.arcade.gravity.y = 300;
            // game.add.tween(mummy).to({
            //     x: 0,
            //     y: 200
            // }, 100, Phaser.Easing.Linear.None, true, 0, 0, false);

        }


        this.update = function () {
            // mg.x -= 1;
            // mummy.x += 1;

        }

    });


}

module.exports = boot;