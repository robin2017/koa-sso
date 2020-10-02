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

## 二、项目配置
#### 1、三个项目域名和端口，需要在host中配置下(全部采用http协议)
```
sso:  robinsso.com:12800
app1: robinapp1.com:12801
app2: robinapp2.com:12802
```