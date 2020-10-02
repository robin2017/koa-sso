const home = async (ctx) => {
    const {user} = ctx.session;
    //必须加await
    await ctx.render('home', {
        user
    })
}

module.exports = home