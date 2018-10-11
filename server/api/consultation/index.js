import Router from "koa-router";

const models = require("../../models/index");
const Consultation = require("../../models/Consultation");
const User = require("../../models/User");

const router = new Router()

router.get("/", async ctx => {
  const data = await models.Consultation.findAll({
    order: [
      ["id", "desc"]
      //["컬럽값", "asc or desc" asc: 오름차순 desc: 내림차순]
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

router.post("/:id", async ctx => {
  const { data } = ctx.request.body;
  const { id } = ctx.params
  // const data = ctx.request.body.data = const { data } = ctx.request.body
  //const data = ctx.request.body.data = const { data , as , kk } = ctx.request.body

  const result = await models.Consultation.update(data,{ where: {id: id} });

  ctx.body = result;
});

router.get("/staff", async ctx => {
  const result = await models.Consultation.findOne({
    where: {
      manager_id: "신현민"
    }
  });
  ctx.body = result;

  // models.Consultation.update({name: "asd"}, {where:{id:id}})
});

router.get("/getAllStaff", async ctx =>{
  const result = await models.User.findAll({})
  ctx.body = result;
})

router.get("/:id", async ctx => {
  const {id} = ctx.params

  const result = await models.Consultation.findAll({
    where: {
      id: id
    }
  })
  ctx.body = result;
});
module.exports = router
