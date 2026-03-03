# T1doo.github.io 使用指南

## 目录

- [站点结构一览](#站点结构一览)
- [个人信息修改](#个人信息修改)
- [添加项目](#添加项目)
- [添加时间线动态](#添加时间线动态)
- [添加 Markdown 笔记](#添加-markdown-笔记)
- [添加 Obsidian 导出笔记](#添加-obsidian-导出笔记)
- [更换头像](#更换头像)
- [修改配色和字体](#修改配色和字体)
- [本地预览](#本地预览)
- [部署到 GitHub Pages](#部署到-github-pages)

---

## 站点结构一览

```
T1doo.github.io/
├── _config.yml              # 站点全局配置
├── _data/
│   ├── projects.yml         # 项目数据（改这里添加项目）
│   ├── timeline.yml         # 时间线数据（改这里添加动态）
│   └── obsidian_notes.yml   # Obsidian 导出笔记的索引
├── _notes/                  # Markdown 笔记（放这里自动识别）
├── notes-html/              # Obsidian 导出的 HTML 笔记
├── assets/
│   └── img/                 # 图片资源（头像、项目截图等）
├── index.html               # 首页
├── projects.html            # 项目页
├── notes.html               # 笔记页
├── about.html               # 关于我
└── timeline.html            # 时间线
```

**核心规则**：大部分内容更新只需要改 `_data/` 下的 YAML 文件或往 `_notes/` 放 Markdown 文件，不需要动 HTML。

---

## 个人信息修改

### 1. 站点标题和描述

编辑 `_config.yml`：

```yaml
title: T1doo's Home          # ← 改成你的站点名称
description: "学生 / 研究者 / 终身学习者"  # ← 改成你的一句话介绍
url: "https://t1doo.github.io"             # ← 改成你的域名
```

### 2. 首页个人信息

编辑 `index.html`，找到 Hero 区域：

```html
<h1 class="hero__name">T1doo</h1>              <!-- 名字 -->
<p class="hero__bio">学生 / 研究者 / 终身学习者</p>  <!-- 一句话介绍 -->
<div class="hero__tags">
  <span class="tag">在读学生</span>              <!-- 身份标签，可增删 -->
  <span class="tag tag--mint">计算机科学</span>
  <span class="tag tag--blue">技术爱好者</span>
</div>
```

标签颜色可选：`tag`（粉色）、`tag tag--mint`（薄荷绿）、`tag tag--blue`（蓝色）、`tag tag--gray`（灰色）。

### 3. 关于我页面

编辑 `about.html`：

- 修改自我介绍文字（在 `<p>` 标签里）
- 修改技能标签（在 `skill-cloud` 区域，增删 `<span>` 即可）
- 修改联系方式（替换 GitHub 链接和邮箱地址）

```html
<!-- 技能标签示例：直接复制粘贴然后改文字 -->
<span class="skill tag">Python</span>
<span class="skill tag tag--mint">你的技能</span>
```

```html
<!-- 邮箱：把 your-email@example.com 换成你的 -->
<a href="mailto:your-email@example.com" class="contact-list__item">
```

### 4. 页脚联系方式

编辑 `_includes/footer.html`，替换 GitHub 链接和邮箱。

---

## 添加项目

编辑 `_data/projects.yml`，按格式添加一个条目即可：

```yaml
- name: 项目名称
  description: 一两句话描述项目
  tags: [Python, Web, AI]      # 技术标签，用于筛选
  github: https://github.com/T1doo/xxx   # GitHub 链接（可选）
  demo: https://xxx.com                   # 在线演示链接（可选）
  icon: "\U0001F680"                      # emoji 图标
```

**完整示例**：

```yaml
- name: 个人主页
  description: 使用 Jekyll 搭建的 GitHub Pages 个人主页
  tags: [Jekyll, HTML, SCSS]
  github: https://github.com/T1doo/T1doo.github.io
  demo: https://t1doo.github.io
  icon: "\U0001F3E0"

- name: 数据分析工具
  description: 基于 Python 的数据可视化分析工具
  tags: [Python, 数据分析]
  github: https://github.com/T1doo/data-tool
  icon: "\U0001F4CA"
```

> **注意**：`tags` 中的标签会自动生成筛选按钮，不需要额外配置。

---

## 添加时间线动态

编辑 `_data/timeline.yml`，在**文件顶部**添加新条目（最新的放最前面）：

```yaml
- date: 2026-03
  title: 事件标题
  description: 简短描述这件事
  icon: "\U0001F389"
```

**常用 emoji 图标参考**：

| 用途 | YAML 写法 | 显示 |
|------|-----------|------|
| 庆祝/里程碑 | `"\U0001F389"` | 🎉 |
| 学习/笔记 | `"\U0001F4DD"` | 📝 |
| 项目/代码 | `"\U0001F4BB"` | 💻 |
| 奖项/成就 | `"\U0001F3C6"` | 🏆 |
| 想法/灵感 | `"\U0001F4A1"` | 💡 |
| 书/阅读 | `"\U0001F4DA"` | 📚 |
| 火箭/发布 | `"\U0001F680"` | 🚀 |

> 首页会自动显示最新的 3 条动态作为预览。

---

## 添加 Markdown 笔记

在 `_notes/` 目录下新建一个 `.md` 文件，文件名会成为 URL 的一部分。

### 步骤

1. 创建文件，例如 `_notes/python-basics.md`
2. 在文件顶部添加 front matter（必须有）
3. 下方写 Markdown 正文

### 模板

```markdown
---
title: 笔记标题
category: 分类名称
tags: [标签1, 标签2]
date: 2026-03-03
---

## 正文从这里开始

正常写 Markdown 即可，支持：

- **粗体**、*斜体*
- 代码块
- 引用
- 表格
- 图片等
```

### 字段说明

| 字段 | 必填 | 说明 |
|------|------|------|
| `title` | 是 | 显示在笔记列表和页面标题 |
| `category` | 否 | 分类，如"课程名称"、"技术" |
| `tags` | 否 | 标签数组，用于筛选 |
| `date` | 否 | 日期，用于排序（新的排前面） |

### 文件命名建议

- 使用英文或拼音：`python-basics.md`、`linear-algebra-notes.md`
- 用短横线分隔单词
- 避免中文文件名（可能导致 URL 问题）

生成的笔记页面地址为：`https://t1doo.github.io/notes/python-basics/`

---

## 添加 Obsidian 导出笔记

适用于从 Obsidian 导出的 HTML 格式笔记。

### 步骤

1. 从 Obsidian 导出 HTML 文件
2. 将 HTML 文件放入 `notes-html/` 目录
3. 编辑 `_data/obsidian_notes.yml`，添加条目：

```yaml
- title: 笔记标题
  file: exported-note.html    # 文件名，要和 notes-html/ 下的文件一致
  category: 分类
  tags: [标签1, 标签2]
  date: 2026-03-03
```

> 这些笔记不会经过 Jekyll 渲染，而是直接以 HTML 展示。

---

## 更换头像

### 方法一：使用图片文件

1. 将头像图片放入 `assets/img/`，例如 `assets/img/avatar.png`
2. 编辑 `index.html`，将 Hero 区域的 emoji 替换为 `<img>`：

```html
<!-- 替换前 -->
<div class="hero__avatar">🧑‍💻</div>

<!-- 替换后 -->
<img src="/assets/img/avatar.png" alt="头像" class="hero__avatar">
```

3. 同理修改 `about.html` 中的头像：

```html
<!-- 替换前 -->
<div class="about-intro__avatar">🧑‍🎓</div>

<!-- 替换后 -->
<img src="/assets/img/avatar.png" alt="头像" class="about-intro__avatar">
```

### 方法二：保持使用 emoji

直接修改 HTML 中的 emoji 字符即可。

---

## 修改配色和字体

编辑 `_sass/_variables.scss`：

### 配色

```scss
// 主色调三件套，改这三组就能换整体风格
$pink:        #f8a5c2;    // 主色（粉色）
$mint:        #a8e6cf;    // 副色（薄荷绿）
$blue:        #81d4fa;    // 点缀色（蓝色）
$cream:       #fefaf6;    // 背景色（奶油白）
```

**想换成其他风格？举几个例子**：

```scss
// 紫色梦幻风
$pink: #b39ddb; $mint: #ce93d8; $blue: #9fa8da; $cream: #faf5ff;

// 暖橙风
$pink: #ffab91; $mint: #ffe0b2; $blue: #ffcc80; $cream: #fff8f0;

// 冷色简约风
$pink: #90caf9; $mint: #80cbc4; $blue: #a5d6a7; $cream: #f5f7fa;
```

### 字体

```scss
// 英文字体改这里（去 Google Fonts 找喜欢的）
$font-sans: 'Nunito', 'Noto Sans SC', system-ui, sans-serif;
```

如果换了字体，还需要编辑 `assets/css/main.scss` 顶部的 Google Fonts 导入链接。

---

## 本地预览

需要先安装 Ruby 和 Jekyll。

### 首次安装

```bash
# 安装 bundler（如果没有的话）
gem install bundler

# 在项目根目录创建 Gemfile（如果没有）
echo 'source "https://rubygems.org"
gem "jekyll"
gem "jekyll-seo-tag"' > Gemfile

# 安装依赖
bundle install
```

### 启动预览

```bash
bundle exec jekyll serve
```

然后在浏览器打开 `http://localhost:4000` 即可预览。

> 修改文件后会自动重建，刷新浏览器即可看到变化。`_config.yml` 的修改需要重启服务。

---

## 部署到 GitHub Pages

### 首次部署

1. 确保仓库名为 `你的用户名.github.io`
2. 推送代码到 GitHub：

```bash
git add .
git commit -m "更新内容"
git push
```

3. 在 GitHub 仓库 → Settings → Pages 中确认：
   - Source 选择 `main` 分支
   - 目录选择 `/ (root)`

4. 等待几分钟，访问 `https://你的用户名.github.io`

### 日常更新流程

每次修改内容后：

```bash
git add .
git commit -m "描述你改了什么"
git push
```

GitHub Actions 会自动构建部署，通常 1-2 分钟后生效。

---

## 快速参考

| 我想... | 改哪个文件 |
|---------|-----------|
| 添加一个项目 | `_data/projects.yml` |
| 添加一条动态 | `_data/timeline.yml` |
| 写一篇笔记 | `_notes/` 下新建 `.md` 文件 |
| 添加 Obsidian 笔记 | 放 HTML 到 `notes-html/`，更新 `_data/obsidian_notes.yml` |
| 改个人信息 | `index.html`（首页）、`about.html`（关于页） |
| 改联系方式 | `about.html` + `_includes/footer.html` |
| 换头像 | 放图片到 `assets/img/`，改 HTML 中的 emoji |
| 换配色 | `_sass/_variables.scss` |
| 改站点标题 | `_config.yml` |
