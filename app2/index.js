const path = require('path')
const Koa = require('koa')
const session = require('koa-session')
const views = require('koa-views')
const useRouter = require('./router')
const loginFilter  = require('./filter/loginFilter')
const app = new Koa()
app.keys = ['some secret']
//直接在node命令前添加环境变量即可
const PORT = process.env.PORT || 12801

const CONFIG = {
    key: 'koa:sess',
    maxAge: 86400000,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false,
    renew: false
}

app.use(session(CONFIG, app))
// 加载模板引擎,必须放在路由前面
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
  }))
app.use(loginFilter())

useRouter(app)

app.listen(PORT, () => {
    console.log(`app2服务启动，端口为：http://${process.env.DOMAIN}:${PORT}`)
})