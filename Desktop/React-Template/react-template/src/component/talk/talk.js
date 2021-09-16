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
            <h2>Let's Talk</h2>
          </div>
        </div>
        <div className="col-md-3">
          <button className="talk-getstarted">
            <a>Get Started</a> <span className="to-right"></span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Talk;
