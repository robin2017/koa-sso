const utils = require('../utils')
module.exports = function () {
    return async function (ctx, next) {
        //post请求直接放行
        if (['POST', 'post'].includes(ctx.method)) {
            return await next()
        }
        let token = ctx.cookies.get('token')
        console.log('sso-filter:cookie中token为', token)
        if (token && utils.validToken(token)) {
            //凭证正确则放行
            return await next()
        } else {
            //凭证错误则去登陆页
            return await ctx.render('login')
        }
    }
}