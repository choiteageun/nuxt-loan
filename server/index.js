import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import { Nuxt, Builder } from 'nuxt'
import session from 'koa-session'

async function start () {
  const app = new Koa()
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

  const models = require('./models/index')
  const Consultation = require('./models/Consultation')

  const router = new Router()

  // router.get("/number", ctx =>{
  //   ctx.body = Math.floor(Math.random() *100)
  // })

  

  router.get('/api/consultation',async ctx=>{
    const data = await models.Consultation.findAll({
      order: [
        ["id", "desc"],
        //["컬럽값", "asc or desc"]
      ]
    })
    ctx.body = data
  })

  router.post('/api/consultation',async ctx=>{
    const { data } = ctx.request.body
    // const data = ctx.request.body.data = const { data } = ctx.request.body
    //const data = ctx.request.body.data = const { data , as , kk } = ctx.request.body

    const result = await models.Consultation.create( data )
    
    ctx.body = result
  })

  router.get('/api/staffConsultation',async ctx =>{
    const result = await models.Consultation.findAll({where:{
      manager:"신현민"
    }})
    ctx.body = result
  })

  router.post('/api/createStaff', async ctx =>{
    const {data} = ctx.request.body

    const result = await models.User.create( data)

    ctx.body = result
  })

  router.post('/api/consulForm', async ctx=> {

    const {data} = ctx.request.body

    const result = await models.Consultation.findAll({})
  })

  router.post('/api/auth/login', async ctx =>{
    const { password } = ctx.request.body
    // const password = ctx.request.body.password전개연산자

    if( password === "1234"){
      ctx.session.logged = true
      ctx.status = 200
      ctx.body = "LOGIN"
    }else{
      ctx.status= 401
      ctx.body = "로그인 실패"
    }
  })

  //서버에 라우터 붙이기
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

  app.listen(port)
  console.log('Server listening on :' + port) // eslint-disable-line no-console
}

start()
