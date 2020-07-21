# vue-admin-template

[vue-element-admin](https://github.com/levinhax/vue-admin-template) 是一个后台前端解决方案，它基于 vue 和 element-ui实现。

简单后台基础模板 v1.0
```
git checkout v1.0
```

## 开发

```
# 克隆项目
git clone https://github.com/levinhax/vue-admin-template.git

# 进入项目目录
cd vue-element-admin

# 安装依赖
npm install

# 启动服务
npm run serve
```

## 发布

```
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```

## 其它

```
# 代码格式检查
npm run lint

# 代码风格格式检查并自动修复
npm run format
```

## 已完成功能

- 登录 / 登出
- 多环境发布 dev / stage / production
- git commitlint
- mock server
- 错误页面
    - 403
    - 404
- 动态权限路由
- 表格
    - 公共表格组件
    - 动态表格
    - 滚动懒加载
    - 拖拽表格
- 表单
    - 公共表单组件
- 复制粘贴
- 文件上传
- 视频
    - RTMP(Video.js)

## 最后

项目搭建借鉴：花裤衩大佬的vue-element-admin - https://github.com/PanJiaChen/vue-element-admin
