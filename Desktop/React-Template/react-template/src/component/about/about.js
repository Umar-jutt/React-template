import "./about.css";
import image1 from "../../assets/office-1.jpg";
import image2 from "../../assets/office-2.jpg";
import image3 from "../../assets/office-3.jpg";
const About = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-5 about-pad">
          <div className="about-heading">
            <h1>About .</h1>
          </div>
          <div className="about-text">ONLINE MARKETING SOLUTIONS.</div>
        </div>
        <div className="col-md-7 about-pad">
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ullamcorper neque dapibus ipsum semper, sit amet luctus turpis
            porttitor.
          </p>
        </div>
      </div>

      <div className="row container res">
        <div className="col-md-8 overlay">
          <div className="image1">
            <img src={image1} />

            <h5>Teamwork</h5>
            <p>Lorem ipsum dolor</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="image2 mb-4 ">
            <img src={image2} />
            <h5>Philosophy</h5>
            <p>Lorem ipsum dolor</p>
          </div>
          <div className="image3">
            <img src={image3} />
            <h5>Office</h5>
            <p>Lorem ipsum dolor</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
