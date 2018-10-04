import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import { Nuxt, Builder } from 'nuxt'
import session from 'koa-session'


async function start () {
  const app = new Koa()
  const http = require('http').createServer(app.callback())
  const io = require("socket.io")(http)
  const host = process.env.HOST || '127.0.0.1'
  const port = process.env.PORT || 3000

  // Import and Set Nuxt.js options
  const config = require('../nuxt.config.js')
  config.dev = !(app.env === 'production')

  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  //세션 등록
  app.keys = ["chance"]
  const sessionConfig = {
    maxAge: 3600 * 24 * 1000 //1일
  }

  app.use(session(sessionConfig, app))

  app.use(bodyParser())
  // router.get("/number", ctx =>{
  //   ctx.body = Math.floor(Math.random() *100)
  // })
  const api = require('./api/index')
  const router = new Router()

  router.use("/api", api.routes())

  //서버에 API 붙이기
  app.use(router.routes())
  app.use(router.allowedMethods())

  
  //Koa 미들웨어, app.use(( ctx, next)=>{} )
  app.use(ctx => {
    //상태 코드
    ctx.status = 200
    ctx.respond = false // Mark request as handled for Koa
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  io.on("connection", (socket)=>{
    console.log("유저가 접속함!")

    socket.on("chat", (msg)=>{
      console.log( "메시지 : "+ msg)

      io.emit("chat", `${msg}`)
    })
  })

  http.listen(port, function(){
    console.log('Server listening on :' + port) // eslint-disable-line no-console
  })
  
}

start()
