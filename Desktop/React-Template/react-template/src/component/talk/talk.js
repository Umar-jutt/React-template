import "./talk.css";
const Talk = () => {
  return (
    <>
      <div className="row bg-dark talk-high">
        <div className="col-md-4">
          <div className="talk-icons">
            <i className="fa fa-facebook talk-icon"></i>
            <i className="fa fa-twitter talk-icon"></i>
            <i className="fa fa-instagram talk-icon"></i>
            <i className="fa fa-youtube talk-icon"></i>
          </div>
        </div>
        <div className="col-md-5">
          <div className="talk-heading">
            <h2>Let's Talk?</h2>
          </div>
        </div>
        <div className="col-md-3">
          <button className="talk-getstarted">
            <a>Get Started</a> <span className="to-right"></span>
          </button>
        </div>
      </div>
      <div className="row pot-row">
        <div className="col-md-6 pot-content">
          <h3>Brandenburg</h3>
          <p>+123 456 789</p>
        </div>
        <div className="col-md-6 pot-content">
          <h3>Potsdam</h3>
          <p>+123 456 789</p>
        </div>
      </div>
      <div className="row text-row container ps-md-5">
        <div className="col-md-2 text-content">
          <h2 style={{ fontFamily: "-moz-initial" }}>Friday</h2>
        </div>
        <div className="col-md-2 text-content">
          <h2 style={{ fontFamily: "cursive" }}>Design</h2>
        </div>
        <div className="col-md-2 text-content">
          <h2 style={{ fontFamily: "inherit" }}>Brand</h2>
        </div>
        <div className="col-md-2 text-content">
          <h2 style={{ fontFamily: "monospace" }}>Media</h2>
        </div>
        <div className="col-md-2 text-content">
          <h2
            style={{
              fontFamily:
                "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
            }}
          >
            Stretgy
          </h2>
        </div>
        <div className="col-md-2 text-content">
          <h2 style={{ fontFamily: "sans-serif" }}>Product</h2>
        </div>
      </div>
      <div className="row bg-dark pt">
        <div className="col-md-4">
          <p style={{ color: "#747457" }}>
            2020 ©{" "}
            <span>
              <a style={{ color: "white" }}>Marketing</a>
            </span>{" "}
            - All Rights Reserved
          </p>
        </div>
        <div className="col-md-4 offset-md-4">
          <ul style={{ listStyle: "none" }} className="d-flex footer-hov">
            <li>
              <a
                className="pe-3"
                style={{ color: "white", textDecoration: "none" }}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className="pe-3"
                style={{ color: "white", textDecoration: "none" }}
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="pe-3"
                style={{ color: "white", textDecoration: "none" }}
              >
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Talk;
