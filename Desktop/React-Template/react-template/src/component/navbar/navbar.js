import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar container">
        <div className="navbar-brand">StudioM4.</div>
        <div className="navlist">
          <a href="" className="navlinks">
            Home
          </a>
          <a href="" className="navlinks">
            Live Demo
          </a>
          <a href="" className="navlinks">
            Live Demo Blocks
          </a>
          <a href="" className="navlinks">
            Buy Now
          </a>
          <a href="" className="navlinks fa fa-shopping-cart"></a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
