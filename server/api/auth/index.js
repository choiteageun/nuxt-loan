import Router from "koa-router";

const router = new Router();

router.post("/login", async ctx => {
  const { password } = ctx.request.body;
  // const password = ctx.request.body.password전개연산자

  if (password === "1234") {
    ctx.session.logged = true;
    ctx.status = 200;
    ctx.body = "LOGIN";
  } else {
    ctx.status = 401;
    ctx.body = "로그인 실패";
  }
});

router.get("/check", ctx => {
  if (ctx.session.logged) {
    ctx.body = "LOGGED";
  } else {
    ctx.status = 401;
    ctx.body = "비회원";
  }
});
router.get("/logout", ctx => {
  ctx.session = null;
  ctx.body = "LOGOUT";
});

module.exports = router
