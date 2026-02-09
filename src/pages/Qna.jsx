import React from 'react';
// 引入剛剛做好的 QnaTop
import QnaTop from '../components/Qna/QnaTop';
import FilterBar from '../components/Qna/FilterBar';
import QnaList from '../components/Qna/QnaList';
import Sidebar from '../components/Qna/Sidebar';
import '../assets/scss/Qna.scss';

const Qna = () => {
    return (
        <div className="qna-page-wrapper">
            <div className="container py-5">



                <div className="row">
                    {/* --- 左側 Mainbar --- */}
                    <main className="col-12 col-lg-8 qna-mainbar me-28px">

                        <QnaTop />
                        <FilterBar />
                        <QnaList />
                    </main>

                    {/* --- 右側 Sidebar --- */}
                    <aside className="border-start border-secondary ps-39px py-84px col-lg-auto d-none d-lg-block">
                        <Sidebar />
                    </aside>
                </div>
                <div className='d-lg-none py-80px'>
                    <Sidebar />
                </div>
            </div>
        </div>);
};

export default Qna;