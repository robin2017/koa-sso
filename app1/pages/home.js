const home = async (ctx) => {
    console.log('---come into -home--')
    let n = ctx.session.views || 0;
    ctx.session.views = ++n;
    ctx.body = 'hello,world'
}

module.exports = home