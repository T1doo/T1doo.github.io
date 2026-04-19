# 🌸 T1doo's Home

T1doo 的个人主页 · 纯 HTML/CSS/JS · 雾紫樱粉梦幻温柔风

🌐 在线访问：https://t1doo.github.io

## ✨ 特色

- 💜 **雾紫 + 樱粉** 双主题配色，浅色"白天樱花林" + 深色"晚安月光夜"
- 🌸 背景飘落 **樱花瓣 / 小星星**（夜晚自动换星星）
- ⌨️ Hero 区 **打字机轮播**温柔文案
- 🌙 右上角 **一键深浅色切换**，状态记在 localStorage
- 📱 三档断点响应式，手机端导航折叠
- 🧚‍♀️ 零依赖、零构建、GitHub Pages 直接部署

## 📁 项目结构

```
T1doo.github.io/
├── index.html          首页
├── about.html          关于我
├── projects.html       项目作品
├── notes.html          学习笔记索引
├── assets/
│   ├── css/
│   │   ├── variables.css   主题变量（配色、字体、间距）
│   │   ├── base.css        基础样式
│   │   ├── layout.css      导航、页脚、响应式
│   │   ├── components.css  卡片、标签、Hero、信息块
│   │   └── animations.css  打字机光标、花瓣动画、淡入
│   └── js/
│       ├── theme.js        深浅色切换
│       ├── typing.js       打字机
│       ├── petals.js       背景花瓣/星星
│       └── nav.js          导航高亮、移动端折叠、淡入
└── README.md
```

## 🛠️ 维护指南

### 改名字 / 简介 / 标签
- **站点标题**：每个 HTML 的 `<title>` 和 `<meta name="description">`
- **首页姓名、标签**：`index.html` → `.hero__name` 和 `.hero__tags`
- **打字机文案**：`assets/js/typing.js` 顶部的 `PHRASES` 数组，想加几句就加几句

### 改配色
直接编辑 `assets/css/variables.css`，改 CSS 变量就行，整站秒变。

### 加项目
打开 `projects.html`，复制一份 `<article class="card" data-tags="code">...</article>` 块，改内容即可。
`data-tags` 可以填 `code / research / web`，多个用空格分隔，对应顶部筛选按钮。

### 加笔记
打开 `notes.html`，在对应分类的 `.note-list` 里加 `<li>` 条目。
想让条目可点击跳转，改成 `<li><a href="xxx.html">标题</a></li>`。

### 加头像图片
把图片放到 `assets/img/avatar.png`，然后把 `index.html` / `about.html` 里的：
```html
<div class="hero__avatar" aria-hidden="true">🧚‍♀️</div>
```
改成：
```html
<img class="hero__avatar" src="assets/img/avatar.png" alt="">
```

## 🚀 本地预览

因为是纯静态，**双击任意 HTML 文件**就能在浏览器里打开 ✨

或者用 VSCode 的 Live Server 插件 / Python 简易服务器：
```bash
python -m http.server 8000
# 然后打开 http://localhost:8000
```

## 🌐 部署

推到 GitHub 的 `main` 分支，在仓库 Settings → Pages 选 `main` 分支根目录，
几分钟后 `https://t1doo.github.io` 就更新啦～

## 💖 致谢

字体：
- [Quicksand](https://fonts.google.com/specimen/Quicksand) · Google Fonts
- [霞鹜文楷屏幕版 LXGW WenKai Screen](https://github.com/lxgw/LxgwWenKai-Screen) · 开源中文字体

---

用爱搭建，慢慢长大 🌸
