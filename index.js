const Koa = require("koa")
const server = require("koa-static")
const Router = require("koa-router")


const app = new Koa();
const router = new Router();

app.use((ctx)=>{
ctx.body = "hello world"
})


app.listen(3000)
