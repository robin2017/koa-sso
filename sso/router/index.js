const router = require('koa-router')()
const loginPage = require('../routes/login')
const checkToken = require('../routes/checkToken')
const useRouter = (app) => {
    router.get('/check_token',checkToken)
    router.get('/', loginPage.loginSuccess)
    router.post('/',loginPage.handleLogin)
    app.use(router.routes());   /*启动路由*/
    app.use(router.allowedMethods());
}
module.exports = useRouter