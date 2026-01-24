import React from 'react';

import trophyGold from '../../assets/images/Qna/No.1.png';
import trophySilver from '../../assets/images/Qna/No.2.png';
import trophyBronze from '../../assets/images/Qna/No.3.png';

const Leaderboard = () => {
    // 定義假資料結構
    const LEADERBOARD_DATA = [
        {
            id: 1,
            rank: 1,
            name: '彭盛傑',
            avatar: 'https://i.pravatar.cc/150?img=11',
            likes: '13k',
            views: '12k'
        },
        {
            id: 2,
            rank: 2,
            name: '吳秀琇',
            avatar: 'https://i.pravatar.cc/150?img=5',
            likes: '10k',
            views: '11k'
        },
        {
            id: 3,
            rank: 3,
            name: '孫亞麟',
            avatar: 'https://i.pravatar.cc/150?img=3',
            likes: '9.2k',
            views: '7.9k'
        },
        {
            id: 4,
            rank: 4,
            name: '陳妍希',
            avatar: 'https://i.pravatar.cc/150?img=9',
            likes: '3.7k',
            views: '2.4k'
        },
        {
            id: 5,
            rank: 5,
            name: '王小明',
            avatar: 'https://i.pravatar.cc/150?img=12',
            likes: '1.7k',
            views: '1.2k'
        }
    ];

    // 輔助函式：取得排名圖示顏色
    const getRankIcon = (rank) => {
        switch (rank) {
            case 1: return <img src={trophyGold} alt="Gold Trophy" className="w-5 h-5 me-2" />;
            case 2: return <img src={trophySilver} alt="Silver Trophy" className="w-5 h-5 me-2" />;
            case 3: return <img src={trophyBronze} alt="Bronze Trophy" className="w-5 h-5 me-2" />;
            default: return <span className="fw-bold text-secondary me-2 d-none">#{rank}</span>;
        }
    };

    return (
        <div className="d-flex flex-column gap-3">
            {LEADERBOARD_DATA.map((user) => (
                <div key={user.id} className="d-flex align-items-center p-2 rounded hover-bg-dark">

                    {/* 1. 頭像 */}
                    <div className="me-3 position-relative">
                        <img
                            src={user.avatar}
                            alt={user.name}
                            className="rounded-circle"
                            width="48"
                            height="48"
                            style={{ objectFit: 'cover' }}
                        />
                        {/* 如果你想把排名疊在頭像上，可以寫在這裡，但設計稿是在右邊 */}
                    </div>

                    {/* 2. 中間資訊 */}
                    <div className="flex-grow-1">
                        <h6 className="mb-1 text-white fw-bold">{user.name}</h6>
                        <div className="d-flex align-items-center text-secondary" style={{ fontSize: '0.85rem' }}>
                            {/* 讚數 */}
                            <span className="me-3">
                                <i className="bi bi-hand-thumbs-up-fill me-1"></i>
                                {user.likes}
                            </span>
                            {/* 瀏覽數 */}
                            <span>
                                <i className="bi bi-file-text-fill me-1"></i>
                                {user.views}
                            </span>
                        </div>
                    </div>

                    {/* 3. 右側排名 (金銀銅盃) */}
                    <div className="ms-2">
                        {getRankIcon(user.rank)}
                    </div>

                </div>
            ))}
        </div>
    );
};

export default Leaderboard;