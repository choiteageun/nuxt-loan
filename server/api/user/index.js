import Router from "koa-router";

const models = require("../../models/index");
const User = require("../../models/User");

const router = new Router()

router.get("/getAllStaff", async ctx =>{
  const result = await models.User.findAll({})
  ctx.body = result;
})

module.exports = router