import React from "react";
import "./ArticleListItem.scss";

const ArticleListItem = ({ data }) => {
  return (
    <div className="article-list-item">
      <div className="content-col">
        <div className="meta-top">
          <span className="date-text">
            <i className="bi bi-clock me-2"></i>
            {data.date}
          </span>
          <div className="divider-vertical"></div>
          <div className="author-info">
            <img src={data.avatar} alt={data.author} className="avatar-sm"  loading="lazy" />
            <span className="author-name">{data.author}</span>
          </div>
        </div>
        <div className="text-content-wrapper">
          <h3 className="item-title">{data.title}</h3>
          <p className="item-desc">{data.desc}</p>
        </div>
        <div className="footer-info">
          <div className="tags-group">
            {data.tags.map((tag, index) => (
              <span key={index} className="tag-pill">
                {tag}
              </span>
            ))}
          </div>
          <div className="stats-group">
            <span>
              <i className="bi bi-eye"></i>
              {data.views}
            </span>
            <span>
              <i className="bi bi-hand-thumbs-up"></i>
              {data.likes}
            </span>
          </div>
        </div>
      </div>
      <div className="image-col">
        <div className="img-wrapper">
          <img src={data.image} alt={data.title}  loading="lazy" />
        </div>
      </div>
    </div>
  );
};
export default ArticleListItem;
