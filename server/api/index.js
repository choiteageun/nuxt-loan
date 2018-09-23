import Router from "koa-router";

const models = require("../models/index");
const Consultation = require("../models/Consultation");

const router = new Router();
const auth = require("./auth")
const consultation = require("./consultation")

router.use("/auth", auth.routes())
router.use("/consultation", consultation.routes())


router.post("/createStaff", async ctx => {
  const { data } = ctx.request.body;

  const result = await models.User.create(data);

  ctx.body = result;
});
module.exports = router
