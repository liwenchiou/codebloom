import React, { useState } from "react";

const UserItem = ({ user }) => {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <div className="sidebar-author-item">
      <div className="d-flex align-items-center flex-grow-1">
        <img
          src={user.avatar}
          className="avatar rounded-circle me-3"
          alt=""
        />
        <div style={{ minWidth: 0 }}>
          <div className="author-name">{user.name}</div>
          <div
            className="desc-text text-truncate"
            style={{ maxWidth: "140px" }}
          >
            {user.bio}
          </div>
        </div>
      </div>
      {/* 按鈕寬度現在由 SCSS 控制 */}
      <button
        className={`btn-follow ms-auto ${isFollowed ? "followed" : ""}`}
        onClick={() => setIsFollowed(!isFollowed)}
      >
        {isFollowed ? "已追蹤" : "追蹤"}
      </button>
    </div>
  );
};

const RecommendedUser = () => {
  const RECOMMENDED_DATA = [
    {
      id: 1,
      name: "羅宗儒",
      avatar: "https://i.pravatar.cc/150?img=60",
      bio: "專注 React 底層原理，每週更新一篇深度技術筆記。",
    },
    {
      id: 2,
      name: "李廷銓",
      avatar: "https://i.pravatar.cc/150?img=32",
      bio: "前端跨端後端。教你用 Node.js 與 Next.js。",
    },
    {
      id: 3,
      name: "江乃子",
      avatar: "https://i.pravatar.cc/150?img=44",
      bio: "文組轉職過來人。不講深奧代碼，只分享新手面試攻略。",
    },
    {
      id: 4,
      name: "陸婉怡",
      avatar: "https://i.pravatar.cc/150?img=24",
      bio: "前端跨後端。教你用 Node.js 與 Next.js",
    },
    {
      id: 5,
      name: "莊輝葦",
      avatar: "https://i.pravatar.cc/150?img=26",
      bio: "前沿技術搬運工。翻譯並解讀最新的前端框架趨勢",
    },
  ];

  return (
    <div className="sidebar-box">
      {RECOMMENDED_DATA.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default RecommendedUser;
