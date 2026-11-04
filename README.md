# 陈烽硕 · 个人学术主页

纯静态 HTML/CSS/JavaScript 网站，无需安装依赖。页面结构参考 Long Ling 的个人学术主页和其公开源码仓库：<https://github.com/LucyLing24/longling>。

页面包含固定顶栏、桌面端侧边个人栏、论文筛选、研究项目时间线及教育/奖项信息；窄屏下切换为移动布局。头像素材位于 `assets/avatar.jpg`。

当前配色以奶油黄、暖金色和橙金色为主，呼应头像中的黄色与橙色。

## 本地预览

在项目目录运行：

```powershell
python -m http.server 8000
```

访问 <http://localhost:8000>。

## 发布到 GitHub Pages

工作流位于 `.github/workflows/pages.yml`。将仓库推送到 GitHub 的 `main` 分支后，在仓库 **Settings → Pages → Build and deployment** 中选择 **GitHub Actions**。工作流完成后可在 Pages 设置页查看站点 URL。

若仓库名为 `FengshuoChen.github.io`，站点地址将是 `https://FengshuoChen.github.io/`（GitHub 用户或组织主页）。若使用其他仓库名，则地址格式为 `https://FengshuoChen.github.io/仓库名/`。

## 内容维护

- 主要文案和栏目位于 `index.html`。
- 视觉样式位于 `styles.css`。
- 论文筛选和移动导航位于 `script.js`。
- 简历中的手机号未放入网页；论文链接尚未提供，因此当前使用文字呈现论文信息。
