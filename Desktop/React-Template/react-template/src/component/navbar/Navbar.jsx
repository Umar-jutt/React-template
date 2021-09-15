import "./Navbar.css";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <div className=" first-image">
        <nav className={navbar ? "navbar active" : "navbar"}>
          <nav className="navbar-expand-lg">
            <div class="container-fluid margin-b ">
              <a class="title nab" href="/">
                StudioM4.
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon res-icon fa fa-bars"></span>
              </button>
              <div
                class="collapse navbar-collapse float-end"
                id="navbarNavDropdown"
              >
                <ul class="navbar-nav margin">
                  <li class="nav-item">
                    <a class="nav-list active" aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-list dropdown-toggle"
                      href="/"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Live Demo
                    </a>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li>
                        <a class="dropdown-item" href="/">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item dropdown">
                    <a
                      class="nav-list dropdown-toggle"
                      href="/"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Live Demo blocks
                    </a>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li>
                        <a class="dropdown-item" href="/">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-list active" aria-current="page" href="/">
                      Buy Now
                    </a>
                  </li>
                  <li>
                    {" "}
                    <i
                      href=""
                      className="fa fa-shopping-cart mt-2 mx-2 nav-icon"
                    ></i>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </nav>

        <div className="section">
          <h1 className="web">Web Design Studio</h1>
          <button className="getstarted">
            Get Started <span className="to-right"></span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
