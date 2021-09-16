import "./showcase.css";
import showCaseApi from "../../showcaseapi";
import { useState } from "react";
const Showcase = () => {
  const [showapi, setShowApi] = useState(showCaseApi);
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
      <div className="row mt-5 container ps-md-5">
        {showapi.map((val) => {
          return (
            <div className="col-md-4 ps-md-5 pb-5 show-media">
              <div className="box">
                <div className="imgbox">
                  <img src={val.img} />
                </div>
                <div className="details">
                  <div className="content">
                    <h3>{val.heading}</h3>
                    <p>Web Design</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Showcase;
