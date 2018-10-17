import Router from "koa-router";

const models = require("../../../models/index");
const Consultation = require("../../../models/Consultation");
const User = require("../../../models/User");

const router = new Router()
router.get('/',async ctx=>{
  const res = await models.Notememo.findAll({
    
  })
  ctx.body= res;
  
})
router.post('/',async ctx=>{
  const res = await models.Notememo.findAll({
  })
  ctx.body= res;
})

module.exports = router