import axios from "axios";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { useState } from "react";

export function Header() {
  const [isSignupVisible, setIsSignupVisible] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const handleSignupShow = () => {
    setIsSignupVisible(true);
  };
  const handleLoginShow = () => {
    setIsLoginVisible(true);
  };
  const handleSignupClose = () => {
    setIsSignupVisible(false);
  };
  const handleLoginClose = () => {
    setIsLoginVisible(false);
  };
  const handleIndexPosts = () => {
    setIsLoginVisible(true);
  };
  const handleLogout = (event) => {
    event.prevenDefault();
    delete axios.defaults.header.common["Authorization"];
    localStorage.remveItem("jwt");
    window.location.href = "/";
  };

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Bloggr
            </a>
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
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/">Home</Link>
                </li>
                |
                <li className="nav-item">
                  <Link to="/about">About</Link>
                </li>
                |
                {localStorage.jwt === undefined ? (
                  <>
                    <li className="nav-item">
                      <a onClick={handleSignupShow} href="#">
                        Signup
                      </a>
                    </li>
                    |
                    <li className="nav-item">
                      <a onClick={handleLoginShow} href="#">
                        Login
                      </a>
                    </li>
                  </>
                ) : (
                  <li className="nav-item">
                    <a onClick={handleLogout} href="#">
                      Logout
                    </a>
                  </li>
                )}
                |
                <li className="nav-item">
                  <a onClick={handleIndexPosts} href="#posts-index">
                    All Posts
                  </a>
                </li>
                |
                <li className="nav-item">
                  <a className="nav-link" href="/posts/new">
                    New Posts
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
        <Modal show={isSignupVisible} onClose={handleSignupClose}>
          <Signup />
        </Modal>

        <Modal show={isLoginVisible} onClose={handleLoginClose}>
          <Login />
        </Modal>
      </header>
    </div>
  );
}
