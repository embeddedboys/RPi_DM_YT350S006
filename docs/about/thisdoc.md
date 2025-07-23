---
title: "本文档"
description: ""
sidebar_position: 1
---

本文档基于 Docusaurus 模板开发。 这里给出如何构建本文档的指引。

### 安装依赖

克隆本仓库
```bash
git clone https://github.com/embeddedboys/RPi_DM_YT350S006.git
```

配置 Node.js 环境

1. 安装 NVM （Node 版本管理器）:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

2. 重加载环境变量:

```bash
source ~/.bashrc
# or 
source ~/.zshrc
```

3. 使用 nvm 安装 Node:
```bash
nvm install node
```

4. 进入 RPi_DM_YT350S006 文件夹, 安装依赖包

```bash
npm install
```

### 本地开发

```bash
yarn run start
```

这条命令会启动一个本地开发服务器，并自动打开浏览器窗口。大多数更改会实时生效，无需重启服务器。

### 构建

```bash
yarn run build
```

### 部署

通常只有管理员才能将网站发布到 GitHub 页面。 部署文档只需在根目录中运行

```bash
yarn deploy
```