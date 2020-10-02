const Koa = require('koa')
const useRouter = require('./router')
const app = new Koa()
const PORT = process.env.PORT || 12800
 
useRouter(app)
app.listen(PORT, () => {
    console.log(`sso服务启动，路径为：http://${process.env.DOMAIN}:${PORT}`)
})