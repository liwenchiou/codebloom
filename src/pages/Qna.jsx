import React, { useState } from "react";
import QnaTop from "../components/Qna/QnaTop";
import FilterBar from "../components/Qna/FilterBar";
import QnaList from "../components/Qna/QnaList";
import Sidebar from "../components/Qna/Sidebar";
import "../assets/scss/Qna.scss";

const Qna = () => {
  const [currentFilter, setCurrentFilter] = useState("hot");
  const [selectedTags, setSelectedTags] = useState(["全部"]);

  return (
    <div className="qna-page-wrapper">
      <div className="container py-5">
        <div className="row">
          <main
            className="col-12 col-lg-8 qna-mainbar pe-lg-5"
            style={{ minWidth: 0 }}
          >
            <QnaTop />
            <FilterBar
              currentFilter={currentFilter}
              onFilterChange={setCurrentFilter}
              selectedTags={selectedTags}
              onTagsChange={setSelectedTags}
            />
            <QnaList
              currentFilter={currentFilter}
              selectedTags={selectedTags}
            />
          </main>
          <aside className="col-lg-4 border-start border-secondary border-opacity-25 d-none d-lg-block ps-4">
            <Sidebar />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Qna;
