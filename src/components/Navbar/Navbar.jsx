import { Link } from "react-router-dom";
import AuthButton from "../Button/AuthButton";
import logoPC from "../../assets/images/logo-PC2.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-neutral-700 p-0">
      <div className="container py-3">
        <Link className="navbar-brand" to="/">
          <img
            src={logoPC}
            alt="logo"
            style={{ width: "196px", height: "28px" }}
            loading="lazy"
          />
        </Link>
        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto align-items-center me-12px d-none d-lg-flex">
            <li className="nav-item">
              <Link className="text-base text-neutral-50 me-12px cb-btn-text" to="/Projects">
                作品列表
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-base text-neutral-50 me-12px cb-btn-text" to="/Articles">
                技術文章
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-base text-neutral-50 me-12px cb-btn-text" to="/Qna">
                問答社群
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav d-flex d-lg-none flex-column align-items-center w-100 mb-5">
            <li className="nav-item">
              <Link className="text-base text-neutral-50 cb-btn-text py-12px d-block" to="/Projects">
                作品列表
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-base text-neutral-50 me-12px cb-btn-text py-12px d-block" to="/Articles">
                技術文章
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-base text-neutral-50 me-12px cb-btn-text py-12px d-block" to="/Qna">
                問答社群
              </Link>
            </li>
          </ul>

          <div className="input-group custom-search-group me-12px d-none d-lg-flex">
            <span className="input-group-text py-12px pe-12px">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </span>
            <input type="text" className="form-control" placeholder="搜尋作品、文章或問題..." aria-label="Search" />
          </div>

          <div className="d-flex justify-content-center w-100 d-lg-none">
            <AuthButton />
          </div>
          <div className="d-none d-lg-flex">
            <AuthButton />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
