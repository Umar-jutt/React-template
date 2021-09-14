import "./about.css";
const About = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-5">
          <div className="about-heading">
            <h1>About .</h1>
          </div>
          <div className="about-text">ONLINE MARKETING SOLUTIONS.</div>
        </div>
        <div className="col-md-7">
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ullamcorper neque dapibus ipsum semper, sit amet luctus turpis
            porttitor.
          </p>
        </div>
      </div>

      <div className="row container">
        <div className="col-md-8">
          <div className="image-1">
            <h5>Teamwork</h5>
            <p className="image-1-text">Lorem ipsum dolor</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="image-2 ">
            <h5>Philosophy</h5>
            <p className="image-text">Lorem ipsum dolor</p>
          </div>
          <div className="image-3">
            <h5>Office</h5>
            <p className="image-text">Lorem ipsum dolor</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
