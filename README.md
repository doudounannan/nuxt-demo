# nuxt-demo

> Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install*[see note below]

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

## demo 讲解

本项目使用 material 组件库, 访问路径 127.0.0.1:3000

### 部署

#### 构建打包前端与后端代码

```bash
# 通过以下命令生成 build 和 .nuxt 目录
$ npm run build
```

#### 拷贝 build 和 .nuxt 和 package.json 和生产环境的 node_modules 目录到服务器

生产环境的 node_modules 生成方式

```bash
$ npm i --production
```

#### 开启服务端的 server 服务

```bash
$ NODE_ENV=production node build/main.js
```

### 前端渲染

127.0.0.1:3000/demo
