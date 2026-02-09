import React from 'react';
import QnaCard from './QnaCard';

// 假資料 (Mock Data) - 根據設計稿 image_9c0bdb.png 等截圖
const MOCK_QA_DATA = [
    {
        id: 1,
        status: '待解決',
        time: '5 小時前',
        title: 'useEffect 造成無限 re-render，依賴陣列該怎麼設？',
        excerpt: '我在 effect 裡面呼叫了 API 並更新 state，結果導致頁面卡死無限迴圈。ESLint 叫我把 function 加進 dependency，但加了更慘...',
        author: { name: '楊子萱', avatar: 'https://i.pravatar.cc/150?img=9' },
        tags: ['React', 'hooks', 'bug'],
        stats: { votes: 34, replies: 11 }
    },
    {
        id: 2,
        status: '已解決',
        time: '1 天前',
        title: '2025年了，CSS 垂直置中到底該用 Flexbox 還是 Grid？',
        excerpt: '以前都用 position: absolute 硬幹，現在主流專業大家比較推薦哪一種寫法？希望能兼顧瀏覽器相容性。',
        author: { name: 'CSS Wizard', avatar: 'https://i.pravatar.cc/150?img=12' },
        tags: ['CSS', 'Layout', '討論'],
        stats: { votes: 45, replies: 12 }
    },
    {
        id: 3,
        status: '待解決',
        time: '5 小時前',
        title: 'Text content does not match server-rendered HTML',
        excerpt: '使用了日期套件 dayjs，結果部署後一直跳出 Hydration mismatch 的錯誤，但在本機開發時是正常的，有人遇過嗎？',
        author: { name: 'Sarah Lin', avatar: 'https://i.pravatar.cc/150?img=5' },
        tags: ['Next.js', 'SSR', 'Debug'],
        stats: { votes: 5, replies: 1 }
    },
    {
        id: 4,
        status: '已解決',
        time: '2025-12-01',
        title: '前端轉職，作品集放「電商網站」還是「互動小遊戲」比較加分？',
        excerpt: '目前正在準備轉職面試，想知道面試官比較喜歡看架構完整的購物車系統，還是比較吸睛的 Canvas 互動特效？',
        author: { name: '迷途小書僮', avatar: 'https://i.pravatar.cc/150?img=3' },
        tags: ['Career', 'Portfolio', '面試'],
        stats: { votes: 88, replies: 24 }
    }
];

const QnaList = ({ filterType }) => {
    return (
        <div className="d-flex flex-column">
            {MOCK_QA_DATA.map((item) => (
                <QnaCard key={item.id} data={item} />
            ))}

            {/* 載入更多按鈕 */}
            <div className="text-center mt-3">
                <button className="btn btn-outline-secondary rounded-pill px-4">
                    查看更多
                </button>
            </div>
        </div>
    );
};

export default QnaList;