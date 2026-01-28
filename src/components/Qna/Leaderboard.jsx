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
            {LEADERBOARD_DATA.map((user) => {
                // 判斷是否為前三名
                const isTopThree = user.rank <= 3;

                return (
                    <div
                        key={user.id}
                        // ★ 修改重點在此：
                        // 1. 保留原本的 d-flex align-items-center py-2 rounded
                        // 2. 判斷 isTopThree ? 加上邊框和背景 : 加上原本的 hover-bg-dark
                        className={`d-flex align-items-center py-2 rounded ${isTopThree
                            ? 'border border-secondary border-opacity-50 bg-white bg-opacity-10'
                            : 'hover-bg-dark'
                            }`}
                    >

                        {/* 1. 頭像 */}
                        <div className="ps-12px me-3 position-relative">
                            <img
                                src={user.avatar}
                                alt={user.name}
                                className="rounded-circle"
                                width="40"
                                height="40"
                                style={{ objectFit: 'cover' }}
                            />
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
                );
            })}
        </div>
    );
};

export default Leaderboard;