import Leaderboard from './Leaderboard';
import RecommendedUser from './RecommendedUser';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column">
      <div className="sidebar-section mb-56px">
        <h5 className="h5 text-white glow-title mb-20px">問答達人榜</h5>
        <Leaderboard />
      </div>

      <div className="sidebar-section">
        <h5 className="h5 text-white title-decoration mb-20px">推薦關注</h5>
        <RecommendedUser />
      </div>
    </div>
  );
};
export default Sidebar;