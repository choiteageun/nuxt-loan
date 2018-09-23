import Router from "koa-router";

const models = require("../../models/index");
const Consultation = require("../../models/Consultation");

const router = new Router()

router.get("/", async ctx => {
  const data = await models.Consultation.findAll({
    order: [
      ["id", "desc"]
      //["컬럽값", "asc or desc"]
    ]
  });
  ctx.body = data;
});

router.post("/", async ctx => {
  const { data } = ctx.request.body;
  // const data = ctx.request.body.data = const { data } = ctx.request.body
  //const data = ctx.request.body.data = const { data , as , kk } = ctx.request.body

  const result = await models.Consultation.create(data);

  ctx.body = result;
});

router.get("/staff", async ctx => {
  const result = await models.Consultation.findAll({
    where: {
      manager: "신현민"
    }
  });
  ctx.body = result;
});

router.get("/:id", async ctx => {
  const {id} = ctx.params

  const result = await models.Consultation.findAll({
    where: {
      id: id
    }
  })
  console.log(result);

  ctx.body = result;
});
module.exports = router
