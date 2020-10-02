const utils = require('../utils')
const checkToken = async (ctx) => {
    const {token} = ctx.query;
   if(utils.validToken(token)) {
        ctx.body = {
            code:0,
            userId:'test'
        }
   }else{
       ctx.body = {
           code:-1
       }
   }
}
module.exports = checkToken