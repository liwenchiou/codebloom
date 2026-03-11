# 專案優化修改 TODO 清單

根據專業專家審視與同學建議彙整，以下為建議修改項目：

## 1. 基礎規範與程式碼品質 (JS/SCSS/HTML)
- [ ] **移除測試用 `console.log`**：檢查所有元件（特別是 API 串接處），移除 Debug 用的 `console.log`。
- [ ] **統一縮排風格**：確保全站 JS/HTML/SCSS 統一使用 **2 格空格** 縮排。
- [x] ~~**SCSS 媒體查詢轉型**：將原生的 `@media (min-width: 768px)` 替換為 Bootstrap Mixin~~
    - ⚠️ **不適用**：專案使用 Bootstrap JS bundle，未引入 Bootstrap SCSS 源碼，無法使用 `@include media-breakpoint-up(md)`。已還原為原生 `@media`。
- [ ] **補強 `<img>` 屬性**：
    - [ ] 檢查所有 `<img>` 標籤，裝飾性圖片補上 `alt=""`，內容圖片補上具體描述。
    - [ ] 增加 `loading="lazy"` 以優化效能。

## 2. 網站設定與 SEO (index.html)
- [x] **語系調整**：將 `lang="en"` 修改為 `lang="zh-Hant-TW"`。
- [x] **新增 Open Graph (OG) Metadata**：
    - [x] 補上 `og:title`, `og:image`, `og:description` 設定，優化社群分享預覽。

## 3. Bootstrap 格線系統優化
- [x] **簡化格線 Class**：
    - [x] 移除與 `col-md-*` 同層且冗餘的 `col-12`（例如 `EditProfile.jsx` 中的多處標記）。

## 4. React 邏輯與無障礙 (A11y)
- [x] **狀態持久化**：
    - [x] 修復 `AuthButton.jsx` 重新整理後 `isAuth` 狀態消失的問題（需在 `useEffect` 初始化時檢查 `localStorage`）。
- [x] **無障礙標籤 (A11y)**：
    - [x] **【AuthButton.jsx】**：為 Modal 的 `btn-close` 補上 `aria-label="關閉"`。
    - [x] **【ProductSearch.jsx】**：為搜尋框 `input` 補上 `aria-label="搜尋產品"`。
    - [x] **【EditProfile.jsx】**：將「性別」與「求職狀態」的單選組使用 `<fieldset>` 與 `<legend>` 包裝。

## 5. 使用者體驗 (UX) 與效能
- [x] **輸入防錯處理**：
    - [x] 針對電話或數量輸入框加入判斷，防止輸入非數字字元導致 `NaN`。
- [x] **API 呼叫優化**：
    - [x] 將 `ArticleSection.jsx` 的 `fetch` 改為全站統一的 `axios`。
    - [x] 將 `API_BASE` 抽離至 `.env` 環境變數。
- [x] **全站滾動優化**：
    - [x] 移除各處手寫的 `window.scrollTo(0, 0)`，考慮在路由層實作全域 ScrollToTop。
- [ ] **圖片尺寸控管**：
    - [ ] 針對 `trails` 或列表頁圖片尺寸進行檢查，避免原始圖檔寬度超過顯示區域的 2 倍（例如顯示 300px，圖檔不應超過 600px）。

## 6. 專家級進階架構建議 (Professional Tips) 💎
這部分是針對程式碼「可維護性」與「專業度」的進階優化：

- [ ] **元件拆分 (Component Decomposition)**：
    - [ ] **【EditProfile.jsx】過長 (500+行)**：建議將表單拆分為子元件，如 `BasicInfoSection.jsx`、`SocialLinksSection.jsx`，增加可讀性與可測試性。
    - [ ] **【AuthButton.jsx】Logic 抽離**：將 Modal 的切換邏輯與 API 登入邏輯封裝成一個 Custom Hook `useAuth.js`。
- [x] **全域狀態管理 (State Management)**：
    - [x] 目前 `userName` 與 `isAuth` 分散在不同元件。建議建立一個 **`AuthContext`** 統一管理全域登入狀態與使用者資料，避免各次元件重複讀取 `localStorage`。
- [ ] **表單處理優化 (Form Handling)**：
    - [ ] 當表單欄位變多時（如 `EditProfile`），考慮引入 `React Hook Form`。這能顯著提升效能（減少不必要的 Re-render）並簡化驗證邏輯。
- [x] **防禦性程式碼 (Defensive Coding)**：
    - [x] **API 錯誤邊界**：加入 `Error Boundary` 處理元件崩潰情形。
    - [ ] **Data Null Check**：在渲染 API 資料（如 `profile.name`）前，確保有預設值或邏輯判斷，避免 `undefined` 報錯。
- [x] **效能優化 (Memoization)**：
    - [x] 如果列表頁（如 `ArticleList`）資料量變大，使用 `React.memo` 或 `useMemo` 避免不必要的子元件重複渲染。
- [ ] **安全性強化 (Security)**：
    - [ ] **防止明碼傳輸**：確保 `API_BASE` 指向的是 `https` (你目前已經是了，做得好！)。
    - [ ] **XSS 防範**：雖然 React 預設會過濾內容，但在使用 `dangerouslySetInnerHTML`（若有的話）時要格外小心。
