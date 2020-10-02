const Koa = require('koa')
const session = require('koa-session')
const useRouter = require('./router')
const loginFilter  = require('./login/loginFilter')
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
app.use(loginFilter())

useRouter(app)

app.listen(PORT, () => {
    console.log(`app1服务启动，端口为：http://${process.env.DOMAIN}:${PORT}`)
})