const router = require('koa-router')()
const homePage = require('../routes/home')
const useRouter = (app) => {
    router.get('/', homePage)
    app.use(router.routes());   /*启动路由*/
    app.use(router.allowedMethods());
}
module.exports = useRouter