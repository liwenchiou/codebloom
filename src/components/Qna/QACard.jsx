// QACard.jsx
const QACard = ({ data }) => {
    return (
        <div className="card mb-3 p-3">
            {/* 這裡放你在 Figma 看到的標籤、標題、內文、按讚數 */}
            <div className="badge">{data.status}</div>
            <h3>{data.title}</h3>
            {/* ... */}
        </div>
    );
};