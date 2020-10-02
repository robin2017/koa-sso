module.exports = function () {
    return async function (ctx, next) {
        console.log('---login-filter--:',)
        const url = ctx.request.url;
        const user = ctx.session.user;
        const token =ctx.query.token
        // if(url==='/favicon.ico'){
        //     return 
        // }
        if (user) {//1、有自己的session，则直接通过
            console.log('1、有自己session')
            return await next()
        }
        if (token) {//2、没有session，有凭证，则去验证下
            console.log('2、没有session，有凭证')
            ctx.body = 'ddddd'
            return 
        }
        console.log('3、啥都没有，去登录')
        //3、啥都没有，那就去登录吧
        ctx.redirect(`http://robinsso.com:12800?redirectUrl=http://${ctx.request.header.host}${ctx.request.url}`)
    }
}