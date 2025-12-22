import React from "react";
import { Link } from "react-router-dom";
import AuthButton from "./AuthButton";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-neutral-700 cb-navbar">
      <div className="container">
        <Link className="navbar-brand " to="codebloom/">
          <img
            src="./src/images/logo-PC.png"
            alt="logo"
            style={{ width: "196px", height: "28px" }}
          />
        </Link>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav justy mb-2 mb-lg-0  py-12px">
            <li className="nav-item py-12px px-4  me-12px">
              <Link
                className="text-base text-neutral-50 "
                to="codebloom/Projects"
              >
                作品列表
              </Link>
            </li>
            <li className="nav-item py-12px px-4  me-12px">
              <Link
                className="text-base text-neutral-50 me-12px"
                to="codebloom/Articles"
              >
                技術文章
              </Link>
            </li>
            <li className="nav-item py-12px px-4  me-12px">
              <Link
                className="text-base text-neutral-50 me-12px"
                to="codebloom/Qna"
              >
                問答社群
              </Link>
            </li>
            {/* <li className="nav-item">
                <Link
                  className="text-base text-neutral-50 py-12px px-4 me-12px"
                  to="codebloom/Dashboard"
                >
                  創作中心
                </Link>
              </li> */}
            <li className="nav-item me-12px">
              <div className="input-group navbar-search">
                <span
                  className="input-group-text bg-neutral-500 text-neutral-300"
                  id="search-addon"
                  style={{ border: "1px solid #3d4145" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </span>
                <input
                  type="text"
                  className="form-control bg-neutral-500"
                  placeholder="搜尋作品、文章或問題…"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  style={{ width: "324px", border: "1px solid #3d4145" }}
                />
              </div>
            </li>
          </ul>
        </div>
        <div className="ms-3">
          <AuthButton />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
