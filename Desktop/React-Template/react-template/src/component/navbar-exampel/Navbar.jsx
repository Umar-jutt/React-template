import "./Navbar.css";

const Navbarex = () => {
  return (
    <>
      <div className=" first-image">
        <nav class="navbar navbar-expand-lg fixed-top">
          <div class="container-fluid margin-b ">
            <a class="navbar-brand nab" href="#">
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
              <span class="navbar-toggler-icon fa fa-bars "></span>
            </button>
            <div
              class="collapse navbar-collapse float-end"
              id="navbarNavDropdown"
            >
              <ul class="navbar-nav margin  ">
                <li class="nav-item">
                  <a
                    style={{ color: "white" }}
                    class="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    style={{ color: "white" }}
                    class="nav-link dropdown-toggle"
                    href="#"
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
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item dropdown">
                  <a
                    style={{ color: "white" }}
                    class="nav-link dropdown-toggle"
                    href="#"
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
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a
                    style={{ color: "white" }}
                    class="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Buy Now
                  </a>
                </li>
                <li>
                  {" "}
                  <i
                    style={{ color: "white" }}
                    className="fa fa-shopping-cart "
                  ></i>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="section">
          <h1 className="web">Web Design Studio</h1>
          <button className="getstarted">
            <a>Get Started</a> <span className="to-right"></span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbarex;
