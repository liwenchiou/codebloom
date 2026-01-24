// Sidebar.jsx
import Leaderboard from './Leaderboard';
import RecommendedUser from './RecommendedUser';

const Sidebar = () => {
    return (
        <div className="d-flex flex-column">
            {/* 模組 1: 達人榜 */}
            <div className="sidebar-section mb-56px">
                <h5 className="h5 text-white glow-title">問答達人榜</h5>
                <Leaderboard />
            </div>

            {/* 模組 2: 推薦關注 */}
            <div className="sidebar-section">
                <h5 className="h5 text-white title-decoration">推薦關注</h5>
                <RecommendedUser />
            </div>
        </div>
    );
};
export default Sidebar;