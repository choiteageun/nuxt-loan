import Router from "koa-router";

const models = require("../models/index");
const Consultation = require("../models/Consultation");
const User = require("../models/User");

const router = new Router();
const auth = require("./auth")
const consultation = require("./consultation")
const user = require("./user")

router.use("/auth", auth.routes())
router.use("/consultation", consultation.routes())
router.use("/user", user.routes())

router.get("/list", ctx=>{
  ctx.body = ["사과", "바나나", "오렌지",1,3]
})


module.exports = router
