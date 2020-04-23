const auth = require("koa-basic-auth");
const request = require("request");
const Koa = require("koa");
const app = new Koa();

// require auth
app.use(auth({ name: process.env.PORT || "image-basic-auth", pass: process.env.PORT || "glasgow-mega-snake" }));

// fetch downstream
app.use(async (ctx) => {
  let fetch_url = ctx.request.query["fetch"];

  if (fetch_url) ctx.body = ctx.req.pipe(request(fetch_url));
  else ctx.status = 400;
});

app.listen(process.env.PORT || 3000);
