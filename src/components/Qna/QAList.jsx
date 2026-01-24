import React from 'react';

// 暫時把假資料放在這裡，或者之後用 props 傳進來
const MOCK_DATA = [
    { id: 1, title: 'useEffect 造成無限 re-render？', tags: ['React', 'Hooks'], status: 'solved' },
    { id: 2, title: 'Flexbox 還是 Grid？', tags: ['CSS', 'Layout'], status: 'discuss' },
];

const QAList = () => {
    return (
        <div className="qa-list">
            {MOCK_DATA.map((item) => (
                <div key={item.id} className="card mb-3 bg-black border-bottom border-secondary">
                    <div className="card-body px-0">
                        <h5 className="card-title text-white">{item.title}</h5>
                        <div className="d-flex gap-2">
                            {item.tags.map(tag => (
                                <span key={tag} className="badge bg-dark border border-secondary text-info">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default QAList;