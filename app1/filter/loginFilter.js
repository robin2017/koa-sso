const request = require('request')
const requestPromise = (url) => {
    return new Promise((resolve, reject) => {
        request(url, function (err, response, data) {
            if (!err && response.statusCode === 200) {
                return resolve(data)
            }
            reject(err)
        })
    })
}
module.exports = function () {
    return async function (ctx, next) {
        console.log('---login-filter--:',)
        const url = ctx.request.url;
        const user = ctx.session.user;
        const token = ctx.query.token
        if (url === '/favicon.ico') {
            return
        }
        if (user) {//1、有自己的session，则直接通过
            console.log('1、有自己session')
            return await next()
        }
        if (token) {//2、没有session，有凭证，则去验证下
            console.log('2、没有session，有凭证')
            //后端发送http请求
            let data = await requestPromise(`http://robinsso.com:12800/check_token?token=${token}&time=${Date.now()}`)
            console.log('验证结果：', data)
            data = JSON.parse(data)
            if (data.code === 0) {//验证通过
                let userId = data.userId
                if (userId) {
                    ctx.session.user = userId
                    console.log('设置完session，准备渲染')
                    return await next()
                } else {
                    ctx.redirect(`http://robinsso.com:12800?redirectUrl=http://${ctx.request.header.host}${ctx.request.url}`)
                }
            } else {//验证失败，重新去登录
                ctx.redirect(`http://robinsso.com:12800?redirectUrl=http://${ctx.request.header.host}${ctx.request.url}`)
            }
            return
        }
        console.log('3、啥都没有，去登录')
        //3、啥都没有，那就去登录吧
        ctx.redirect(`http://robinsso.com:12800?redirectUrl=http://${ctx.request.header.host}${ctx.request.url}`)
    }
}