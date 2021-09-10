import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="flex">
        <div className=" navbar-brand">StudioM4.</div>
        <div className="navbar-list">
          <ul>
            <div className="ulflex">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Live Demo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Live Demo Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Buy Now
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fa fa-shopping-cart" href="#"></a>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
