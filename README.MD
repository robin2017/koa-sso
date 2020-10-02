# 基于koa实现的sso示例
## 一、项目安装和使用
#### 1、三个项目域名和端口，需要在host中配置下(全部采用http协议)
```
sso:  robinsso.com:12800
app1: robinapp1.com:12801
app2: robinapp2.com:12802
```
#### 2、项目安装
+ 安装全局依赖
```
cd koa-sso
npm i
```
+ 安装各个项目依赖
```
npm run install:all
```
#### 3、项目运行
```
npm run serve:all
```
## 二、参考资料
```
https://github.com/hezhii/nodejs-sso-example 
```