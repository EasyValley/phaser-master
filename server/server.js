const koa = require('koa');
const path = require('path');
const app = new koa();
const router = require('./router');


function start() {

    app.use(router.routes())
    app.use(router.allowedMethods());
    app.use(require('koa-static')(path.join(__dirname, '../dist/')));
    app.use(require('koa-static')(path.join(__dirname, '../lib/')));

    app.listen(8003, () => {
        console.log(`phaser dd应用启动
        server 运作在8003端口
        `);
    });
}

exports.start = start;