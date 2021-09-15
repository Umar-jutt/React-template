import "./card4.css";
import manyCard4 from "../../manycard4";
import { useState } from "react";
const Card4 = () => {
  const [card4, setCard4] = useState(manyCard4);
  return (
    <>
      <div className="row container">
        {card4.map((val) => {
          return (
            <div className="col-md-4 mt-5" key={val.id}>
              <div className="d-flex card-4">
                <div className="card4-icon">
                  <i className={val.icon}></i>
                </div>
                <div className="direction">
                  <p className="card4-heading">{val.heading}</p>
                  <div className="card4-text">
                    <p>{val.text}</p>
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

export default Card4;
