## Vue 3 + TypeScript + Vite

# 申请权限弹窗

给业务方提供的申请权限的弹窗组件
![默认组件](./public/card.png)
![申请弹窗](./public/dialog.png)

### [Demo URL](https://crane-test.yangqianguan.com/role)

### [接入文档](https://wiki.fintopia.tech/pages/viewpage.action?pageId=117280979)

## Table of Contents

- [Installation](#installation)
  - [Install with npm](#install-with-npm)
  - [Use inline script directly](#use-inline-script-directly)
- [Usage](#usage)
- [Config](#config)
- [FAQ](#FAQ)
- [Browser Support](#browser-support)
- [Acknowledgement](#acknowledgement)

### Installation

#### Install with npm

```bash
$ npm install @yqg/permission
```

#### Install with yarn

```bash
$ yarn add @yqg/permission
```

#### Install with install

```bash
$ pnpm install @yqg/permission
```

### Usage

方式一

step1: 在入口文件(main.js/index.js/app.ts/)引入@yag/permission，并调用 start 方法注册。
[See example](./src/main.ts)

```js
import yqgPermission from "./yqg-permission";
yqgPermission.start();
//支持定义组件标签名，默认为‘<yqg-permission></yqg-permission>’
yqgPermission.start({ tagName: "my-element" });
```

step2: 像原生标签一样进行使用
[See example](./src/App.ts)

```js
	<yqg-permission
		workNumber="05184"
		businessCode="PPDL"
		:permissions="['permissionCode1, permissionCode2']"
		:color="'red'"
		:locale="'zh-CN'"
		@onSuccess="() => {console.log('请求成功')}"
		>
	</yqg-permission>

```

方式二

````html
<!-- 测试环境 -->
script src="https://static-ali-test.yangqianguan.com/cdn/yqg-feedback-sdk/1.2.1/feedback-sdk.umd.js"></script>`

<!-- 生产环境 -->
<script async src="https://static-ali.yangqianguan.com/cdn/yqg-feedback-sdk/1.2.1/feedback-sdk.umd.js" />

### 配置说明

支持自定义标签：yqgPermission.start({tagName: 'my-element'});

### yqg-permission 组件参数说明

| 参数项          | 是否必传 ｜ 说明 | 类型                            | 默认值            |
| --------------- | ---------------- | ------------------------------- | ----------------- | ------- |
| `work-number`   | 是               | 当前登陆人工号                  | string            | ''      |
| `business-code` | 是               | 系统的权限 code                 | string            | ''      |
| `permissions`   | 是               | 当前页面下所有权限点            | string[]或 string | []      |
| `color`         | 否               | 主题色（同 antd）               | string            | #1677ff |
| `locale`        | 否               | 当前语言类型（同 i18n）         | string            | zn-CH   |
| `success`       | 否               | 申请成功时回调函数(vue)         | Function          | ()=> {} |
| `type`          | 否               | 组件类型                        | string            | default |
| `top`           | 否               | 当组件 type=“dragElement”时生效 | string            | 100px   |

### type 参数说明

type = "default": 默认展示图+按钮组件，点击可弹出弹窗
type = "dragElement": 展示‘申请权限’文案，点击可弹出弹窗
type = "custom": 支持自定义组件，以 slot 的方式添加自定义组件，点击自定义组件可弹出弹窗，例如：

```js
	<yqg-permission
		workNumber="05184"
		businessCode="PPDL"
		:permissions="['permissionCode1, permissionCode2']"
		:color="'red'"
		:locale="'zh-CN'"
		type="custom"
		@onSuccess="() => {console.log('请求成功')}"
		>
		<div>自定义按钮</div>
	</yqg-permission>

````

### Browser Support

因为该 npm 包底层使用 webComponent 中 customElements.define，所以仅支持 customElements.define 的浏览器
![浏览器customElements支持现状](./public/image.png)

### NPM scripts

- `pnpm install`: 安装依赖
- `pnpm dev`: 启动项目
- `pnpm build`: 编译项目
- `npm publish`: 发布项目
- `pnpm demo:build`: 构建，并上传 umd 到测试 CDN
- `pnpm prod:build`: 构建，并上传 umd 到生产 CDN

### todo

todo：优化项 react 中成功回调、多语言

### 问题反馈

---
