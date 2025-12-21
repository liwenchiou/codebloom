import React from "react";
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
          <Link className="navbar-brand" to='/'>CodeBloom</Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to='/Projects'>作品列表</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/Articles'>技術文章</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/Qna'>問答社群</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/Dashboard'>創作中心</Link>
            </li>
            
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
