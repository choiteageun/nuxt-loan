import Router from "koa-router";

const models = require("../../models/index");
const User = require("../../models/User");

const router = new Router()

router.get("/", async ctx =>{
  const result = await models.User.findAll({
    order:[
      ["id", "desc"]
    ]
  })
  ctx.body = result;
})

module.exports = router