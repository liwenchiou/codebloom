import React from 'react';

const RecommendedUser = () => {
    const RECOMMENDED_DATA = [
        {
            id: 1,
            name: '羅宗儒',
            avatar: 'https://i.pravatar.cc/150?img=60',
            bio: '專注 React 底層原理，每週更新一篇深度技術筆記。'
        },
        {
            id: 2,
            name: '李廷銓',
            avatar: 'https://i.pravatar.cc/150?img=32',
            bio: '前端跨端後端。教你用 Node.js 與 Next.js。'
        },
        {
            id: 3,
            name: '江乃子',
            avatar: 'https://i.pravatar.cc/150?img=44',
            bio: '文組轉職過來人。不講深奧代碼，只分享新手面試攻略。'
        },
        {
            id: 4,
            name: '陸婉怡',
            avatar: 'https://i.pravatar.cc/150?img=24',
            bio: '前端跨後端。教你用 Node.js 與 Next.js'
        }
    ];

    return (
        <div className="d-flex flex-column gap-4">
            {RECOMMENDED_DATA.map((user) => (
                <div key={user.id} className="d-flex align-items-center">

                    {/* 1. 頭像 */}
                    <img
                        src={user.avatar}
                        alt={user.name}
                        className="rounded-circle me-3"
                        width="48"
                        height="48"
                    />

                    {/* 2. 名稱與簡介 (Bio) */}
                    <div className="flex-grow-1" style={{ minWidth: 0 }}> {/* minWidth: 0 確保文字過長會換行/縮寫 */}
                        <h6 className="text-white mb-1 fw-bold">{user.name}</h6>
                        <p className="text-secondary mb-0 text-truncate" style={{ fontSize: '0.85rem' }}>
                            {user.bio}
                        </p>
                    </div>

                    {/* 3. 追蹤按鈕 */}
                    <button className="btn btn-dark btn-sm border-secondary text-info ms-2 px-3 rounded-pill">
                        追蹤
                    </button>
                </div>
            ))}
        </div>
    );
};

export default RecommendedUser;