import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="flex header-menu fixed">
        <label className="label">StudioM4.</label>
        <div className="navbar-list">
          <ul>
            <div className="ulflex">
              <li class="active">
                <a className="px-2" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="px-2" href="/">
                  <select className="dropdown">
                    <option selected value="Live Demo">
                      Live Demo
                    </option>
                    <option value="Demo 1">Demo 1</option>
                    <option value="Demo 2">Demo 2</option>
                    <option value="Demo 3">Demo 3</option>
                  </select>
                </a>
              </li>
              <li className="nav-item">
                <a className="px-2" href="/">
                  <select className="dropdown">
                    <option selected value="Live Demo">
                      Live Demo Blog
                    </option>
                    <option value="Demo Blog 1">Demo Blog 1</option>
                    <option value="Demo Blog 2">Demo Blog 2</option>
                    <option value="Demo Blog 3">Demo Blog 3</option>
                  </select>
                </a>
              </li>
              <li className="nav-item">
                <a className="px-2" href="/">
                  Buy Now
                </a>
              </li>
              <li>
                <i className="fa fa-shopping-cart" href="/"></i>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
