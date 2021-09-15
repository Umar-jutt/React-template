import "./showcase.css";
import lap1 from "../../assets/laptop1.jpg";
const Showcase = () => {
  return (
    <>
      <div className="show-main">
        <h1 className="show-heading mt-5">Show case of our work</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          ullamcorper <br></br>neque dapibus ipsum semper, sit amet luctus
          turpis porttitor.
        </p>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="showcase">
            <img src={lap1} />

            <div className="image-overlay">
              <div className="image-title">Website Creation</div>
              <p className="image-description">Web Design</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Showcase;
