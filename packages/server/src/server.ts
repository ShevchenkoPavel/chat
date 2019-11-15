// import { foo } from '@chat/common/src';
import Koa from 'koa';
import bodyParser from 'koa-body';
import Router from 'koa-router';

// const Koa = require('koa');
// const Router = require('koa-router');
// const bodyParser = require('koa-body');

const app = new Koa();
const router = new Router();

const serverPort = 5000;

app.use(bodyParser());

// eslint-disable-next-line @typescript-eslint/no-explicit-any
router.get('/test_route', (ctx: any) => {
  console.log('test route');
  ctx.body = 'test route';
});

app.use(router.routes());

// foo();

app.listen(serverPort, () => {
  console.log(`Server running at port ${serverPort}`);
});
