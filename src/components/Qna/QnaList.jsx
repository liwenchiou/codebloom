import React, { useMemo } from "react";
import QnaCard from "./QnaCard";

const qnaData = [
  {
    id: 1,
    status: "urgent",
    statusLabel: "待解決",
    author: "楊子萱",
    avatar: "https://i.pravatar.cc/150?img=9",
    date: "2026-02-25",
    time: "5 小時前",
    title: "useEffect 造成無限 re-render，依賴陣列該怎麼設？",
    desc: "我在 effect 裡面呼叫了 API 並更新 state，結果導致頁面卡死無限迴圈。ESLint 叫我把 function 加進 dependency...",
    tags: ["React", "hooks", "bug"],
    views: "14.5k",
    likes: "34",
    replies: 11,
  },
  {
    id: 2,
    status: "solved",
    statusLabel: "已解決",
    author: "CSS Wizard",
    avatar: "https://i.pravatar.cc/150?img=12",
    date: "2026-02-24",
    time: "1 天前",
    title: "2025年了，CSS 垂直置中到底該用 Flexbox 還是 Grid？",
    desc: "以前都用 position: absolute 硬幹，現在主流專業大家比較推薦哪一種寫法？希望能兼顧瀏覽器相容性。",
    tags: ["CSS", "Layout", "討論"],
    views: "12.1k",
    likes: "45",
    replies: 12,
  },
  {
    id: 3,
    status: "urgent",
    statusLabel: "待解決",
    author: "Sarah Lin",
    avatar: "https://i.pravatar.cc/150?img=5",
    date: "2026-02-25",
    time: "2 小時前",
    title: "Text content does not match server-rendered HTML",
    desc: "使用了日期套件 dayjs，結果部署後一直跳出 Hydration mismatch 的錯誤，但在本機開發時是正常的...",
    tags: ["Next.js", "SSR", "Debug"],
    views: "3.5k",
    likes: "5",
    replies: 1,
  },
  {
    id: 4,
    status: "solved",
    statusLabel: "已解決",
    author: "迷途小書僮",
    avatar: "https://i.pravatar.cc/150?img=3",
    date: "2025-12-01",
    time: "2025-12-01",
    title: "前端轉職，作品集放「電商網站」還是「互動小遊戲」比較加分？",
    desc: "目前正在準備轉職面試，想知道面試官比較喜歡看架構完整的購物車系統，還是比較吸睛的 Canvas 互動特效？",
    tags: ["Career", "Portfolio", "面試"],
    views: "5.6k",
    likes: "88",
    replies: 24,
  },
];

// 數字轉換函式 (用於熱門排序)
const parseKValue = (str) => {
  if (!str) return 0;
  const s = str.toString().toLowerCase();
  return s.includes("k")
    ? parseFloat(s.replace("k", "")) * 1000
    : parseFloat(s);
};

const QnaList = ({ currentFilter, selectedTags }) => {
  const filteredData = useMemo(() => {
    // 1. 標籤過濾邏輯
    let result = selectedTags.includes("全部")
      ? qnaData
      : qnaData.filter((item) =>
          item.tags.some((tag) => selectedTags.includes(tag)),
        );

    // 2. 排序邏輯
    if (currentFilter === "hot") {
      result.sort((a, b) => parseKValue(b.views) - parseKValue(a.views));
    } else {
      result.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    return result;
  }, [currentFilter, selectedTags]);

  return (
    <div className="article-list d-flex flex-column gap-4">
      {filteredData.length > 0 ? (
        filteredData.map((item) => <QnaCard key={item.id} data={item} />)
      ) : (
        <div className="text-neutral-400 py-5 text-center">
          沒有符合標籤的問題
        </div>
      )}
      <div className="text-center mt-5 mb-5">
        <button className="btn btn-view-more">查看更多</button>
      </div>
    </div>
  );
};

export default QnaList;
