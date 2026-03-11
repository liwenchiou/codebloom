# 🌱 Code匠心 - 新手工程師的作品舞台

> 六角學院 React 專題班 — 團隊協作專案

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite)](https://vite.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=flat-square&logo=bootstrap)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

---

## 📖 專案簡介

**Code匠心**（CodeBloom）是一個專為新手工程師打造的技術社群平台，提供專案作品展示、技術文章分享與開發者交流的空間。

從萌芽到綻放——讓每位新手工程師都能在這裡找到屬於自己的舞台。

🔗 **線上預覽**：[https://codebloom.zeabur.app](https://codebloom.zeabur.app)

---

## ✨ 主要功能

| 功能模組 | 說明 |
|---------|------|
| 🏠 **首頁** | 技術文字雲、精選作品、熱門文章、社群 Q&A 展示 |
| 📝 **技術文章** | 文章列表、標籤篩選、作者排行榜 |
| 🛠️ **作品集** | 專案展示、技術棧篩選、難度分類 |
| ❓ **Q&A 社群** | 問題討論、推薦使用者、即時互動 |
| 👤 **個人中心** | 個人資料編輯、社群連結、開放求職狀態設定 |
| 🔐 **會員系統** | 註冊 / 登入 / 登出，密碼 MD5 加密儲存 |

---

## 🛠️ 技術棧

### Frontend
- **[React 19](https://react.dev/)** — 核心框架
- **[React Router DOM 7](https://reactrouter.com/)** — 前端路由管理
- **[Vite 7](https://vite.dev/)** — 建置工具與開發伺服器

### UI / Styling
- **[Bootstrap 5](https://getbootstrap.com/)** — RWD 格線系統與基礎元件
- **[Bootstrap Icons](https://icons.getbootstrap.com/)** — 圖示庫
- **[SASS / SCSS](https://sass-lang.com/)** — 客製化樣式，含統一設計系統（色彩變數、間距工具類）
- **[Swiper](https://swiperjs.com/)** — 輪播元件
- **[GSAP](https://gsap.com/)** — 動畫效果

### Data / API
- **[Axios](https://axios-http.com/)** — HTTP 請求
- **[Supabase](https://supabase.com/)** — 後端資料庫（備援）
- **[JSON Server (Zeabur)](https://zeabur.com/)** — 自架 REST API

### Other
- **[WordCloud.js](https://wordcloud2.timdream.org/)** — 技術文字雲視覺化
- **[blueimp-md5](https://github.com/blueimp/JavaScript-MD5)** — 密碼雜湊
- **[gh-pages](https://github.com/tschaub/gh-pages)** — GitHub Pages 部署

---

## 📁 專案結構

```
codebloom/
├── public/                  # 靜態資源
├── src/
│   ├── assets/
│   │   ├── images/          # 圖片資源
│   │   └── scss/            # 全域樣式 (base, spacing, button, reset...)
│   ├── components/          # 可重用元件
│   │   ├── ArticleList/     # 文章列表頁元件
│   │   ├── ArticleSection/  # 首頁文章區塊
│   │   ├── Button/          # AuthButton (登入/註冊 Modal)
│   │   ├── CTASection/      # 行動呼籲區塊
│   │   ├── EditProfile/     # 個人資料編輯
│   │   ├── Footer/          # 頁尾
│   │   ├── IndexTop/        # 首頁 Hero 區塊
│   │   ├── Navbar/          # 導覽列
│   │   ├── PortfolioSection/# 作品集區塊
│   │   ├── ProductList/     # 作品列表頁元件
│   │   ├── QASection/       # Q&A 區塊
│   │   ├── Qna/             # Q&A 頁面元件
│   │   ├── Roll/            # 跑馬燈元件
│   │   ├── Toast/           # 全域 Toast 通知系統
│   │   └── WordCloudComponent/ # 技術文字雲
│   ├── pages/               # 頁面元件
│   │   ├── Home.jsx         # 首頁
│   │   ├── Articles.jsx     # 文章列表頁
│   │   ├── Products.jsx     # 作品集頁
│   │   ├── Projects.jsx     # 專案頁
│   │   ├── Qna.jsx          # Q&A 頁
│   │   └── Dashboard.jsx    # 個人創作中心
│   ├── App.jsx              # 路由設定
│   ├── main.jsx             # 應用程式入口
│   └── main.scss            # 全域 SCSS 入口
├── index.html               # HTML 入口（含 OG Meta）
├── vite.config.js           # Vite 設定
└── package.json
```

---

## 🚀 本地開發

### 環境需求

- Node.js `>= 18`
- npm `>= 9`

### 安裝與啟動

```bash
# 1. 複製專案
git clone https://github.com/your-username/codebloom.git
cd codebloom

# 2. 安裝依賴
npm install

# 3. 設定環境變數
cp .env.example .env
# 編輯 .env 填入 API 相關設定

# 4. 啟動開發伺服器
npm run dev
```

開啟瀏覽器前往 [http://localhost:5173](http://localhost:5173)

### 其他指令

```bash
npm run build    # 打包正式版本
npm run preview  # 本地預覽正式版
npm run lint     # ESLint 檢查
npm run deploy   # 部署至 GitHub Pages
```

---

## 🌐 部署

本專案支援部署至 **GitHub Pages**：

```bash
npm run deploy
```

線上版本由 **Zeabur** 自動部署，API Server 亦托管於 Zeabur。

---

## 📌 注意事項

- 會員密碼以 **MD5** 雜湊後儲存，建議未來升級為更安全的雜湊演算法（如 bcrypt）
- API Base URL 請設定於 `.env` 檔案，勿直接寫入程式碼
- 裝飾性圖片請確保 `alt=""` 屬性已填寫，以符合無障礙規範

---

## 👩‍💻 開發團隊

> 六角學院 React 專題班 — 協作開發

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
