import React from "react";
// 這裡保留你原本的燈泡圖片路徑
import trophyGold from "../../assets/images/Qna/No.1.png";
import trophySilver from "../../assets/images/Qna/No.2.png";
import trophyBronze from "../../assets/images/Qna/No.3.png";

const rankIcons = { 1: trophyGold, 2: trophySilver, 3: trophyBronze };

const Leaderboard = () => {
  const LEADERBOARD_DATA = [
    {
      id: 1,
      rank: 1,
      name: "彭盛傑",
      avatar: "https://i.pravatar.cc/150?img=11",
      likes: "13k",
      replies: "12k",
    },
    {
      id: 2,
      rank: 2,
      name: "吳秀琇",
      avatar: "https://i.pravatar.cc/150?img=5",
      likes: "10k",
      replies: "11k",
    },
    {
      id: 3,
      rank: 3,
      name: "孫亞麟",
      avatar: "https://i.pravatar.cc/150?img=3",
      likes: "9.2k",
      replies: "7.9k",
    },
    {
      id: 4,
      rank: 4,
      name: "陳妍希",
      avatar: "https://i.pravatar.cc/150?img=9",
      likes: "3.7k",
      replies: "2.4k",
    },
    {
      id: 5,
      rank: 5,
      name: "王小明",
      avatar: "https://i.pravatar.cc/150?img=12",
      likes: "1.7k",
      replies: "1.2k",
    },
  ];

  return (
    <div className="sidebar-box">
      {LEADERBOARD_DATA.map((user) => {
        const isTop3 = user.rank <= 3;
        return (
          <div
            key={user.id}
            className={`sidebar-author-item d-flex align-items-center ${isTop3 ? "top-rank" : ""} clickable`}
          >
            <div className="author-info d-flex align-items-center">
              <img src={user.avatar}
                alt={user.name}
                className="avatar rounded-circle me-3"
               loading="lazy" />
              <div>
                <div className="author-name">{user.name}</div>
                <div className="stats-row d-flex align-items-center gap-3 mt-1">
                  <span className="icon-group d-flex align-items-center gap-1">
                    <i className="bi bi-hand-thumbs-up-fill icon-sm"></i>
                    <span className="num-text">{user.likes}</span>
                  </span>
                  <span className="icon-group d-flex align-items-center gap-1">
                    <i className="bi bi-chat-dots-fill icon-sm"></i>
                    <span className="num-text">{user.replies}</span>
                  </span>
                </div>
              </div>
            </div>

            {isTop3 && (
              <div className="rank-badge ms-auto">
                <img src={rankIcons[user.rank]}
                  alt={`Rank ${user.rank}`}
                  style={{ width: "42px" }}
                 loading="lazy" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Leaderboard;
