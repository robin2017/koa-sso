const router = require('koa-router')()
const loginPage = require('../pages/login')
const useRouter = (app) => {
    router.get('/', loginPage.loginSuccess)
    router.post('/',loginPage.handleLogin)
    app.use(router.routes());   /*启动路由*/
    app.use(router.allowedMethods());
}
module.exports = useRouter