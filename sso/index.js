const path = require('path')
const Koa = require('koa')
const views = require('koa-views')
const bodyParser = require('koa-bodyparser');
const useRouter = require('./router')
const loginFilter = require('./filter/loginFilter')
const app = new Koa()
const PORT = process.env.PORT || 12800
app.use(bodyParser());
// 加载模板引擎,必须放在路由前面
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))
app.use(loginFilter())
useRouter(app)
app.listen(PORT, () => {
  console.log(`sso服务启动，路径为：http://${process.env.DOMAIN}:${PORT}`)
})