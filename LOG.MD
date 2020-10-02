# 基于koa实现的sso示例
## 一、项目注意事项
#### 1、所有中等koa项目必须使用router，且单独抽离
#### 2、熟练使用node的环境变量
```
const PORT = process.env.PORT || 12801
```
```
  "scripts": {
    "serve": "PORT=12801 node index.js"
  },
```
#### 3、所有后端端口采用12800开始
#### 4、业务的session验证逻辑全部放在过滤器中，不要污染业务逻辑
#### 5、next函数前如果有async，则必须加await，防止特殊情况
```
module.exports = function () {
    return async function (ctx, next) {
        //此处必须加await！！
        await next()
    }
}
```
#### 6、ctx常见属性
+ ctx.body : 设置返回文本
+ ctx.query : 查询字符串
+ ctx.request.body : 配合koa-bodyparser获取表单值
+ ctx.cookies : 对cookie进行获取/设置
+ ctx.request.header.host : 得到 域名 + 端口
+ ctx.render() : 配合koa-views进行模版渲染
+ ctx.redirect() : 重定向

 
