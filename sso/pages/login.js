const utils = require('../utils')
//重定向放在success内部处理！！！
const loginSuccess = async (ctx,token) => {
    let redirectUrl = ctx.query.redirectUrl
    if (redirectUrl) {
        if(token&&typeof token==='string'){
            console.log('放在URL上token：',token)
            //跨域之间cookie传不过去，只能在URL上传递
            redirectUrl+=('?token='+token)
        }
        ctx.redirect(redirectUrl)
    } else {
        ctx.body = '<h1>登录成功</h1>'
    }
}

const loginError = async (ctx) => {
    ctx.body = '<h1>用户名或密码错误</h1>'
}

const handleLogin = async (ctx) => {
    let form = ctx.request.body
    console.log('表单数据：', form)
    if (form.name === 'test' && form.password === '123456') {
        //登录成功
        let token = utils.genToken()
        console.log('登录成功，生成token：',token)
        ctx.cookies.set('token', token, {
            maxAge: 1000 * 60 * 60
        })
        loginSuccess(ctx,token)
    } else {
        //登录失败
        loginError(ctx)
    }
}

module.exports = {
    loginSuccess,
    handleLogin
}