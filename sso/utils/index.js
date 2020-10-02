const genToken = () => 'passport-' + Math.random().toString(16).slice(9)
const validToken = (token) => token && token.startsWith('passport')
module.exports = {
    genToken,
    validToken
}