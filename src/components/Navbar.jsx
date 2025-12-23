import React from "react";
import { Link } from "react-router-dom";
import AuthButton from "./AuthButton";
import logoPC from '../images/logo-PC.png';
// import logoMobile from '../images/logo-Mobile.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-neutral-700 p-0">
      <div className="container py-3">
        <Link className="navbar-brand " to="codebloom/">
          <img
            src={logoPC}
            alt="logo"
            style={{ width: "196px", height: "28px" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link
                className=" text-base text-neutral-50 py-12px px-4 me-12px navbar-link"
                to="codebloom/Projects"
              >
                作品列表
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="text-base text-neutral-50 py-12px px-4 me-12px navbar-link"
                to="codebloom/Articles"
              >
                技術文章
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="text-base text-neutral-50 py-12px px-4 me-12px navbar-link "
                to="codebloom/Qna"
              >
                問答社群
              </Link>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <div className="input-group navbar-search position-relative">
              <span
                className="input-group-text bg-neutral-500 text-neutral-300 search-span"
                id="search-addon"
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
                className="form-control bg-neutral-500 search-input text-neutral-200"
                placeholder="搜尋作品、文章或問題…"
                aria-label="Search"
                aria-describedby="search-addon"
                style={{ width: "324px" }}
              />
            </div>
          </form>
          <div className="ms-3">
            <AuthButton />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
