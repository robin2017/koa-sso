module.exports = function(){
    return async function(ctx,next){
        console.log('---login-filter--:')

        let user = ctx.session.user;
        if(user){
            next()
        }

        let token = ctx.query.token;
        if(!token){
            ctx.redirect('http://robinsso.com:12800/login')
        }





 
    }
}