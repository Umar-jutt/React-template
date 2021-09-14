import "./card3.css";
import manyCard3 from "../../manycard3";
import { useState } from "react";
const Card3 = () => {
  const [card3, setCard3] = useState(manyCard3);
  return (
    <>
      <div className="row container mt-5 ms-md-4">
        {card3.map((val) => {
          return (
            <div className="col-md-4" key={val.id}>
              <div className="font-3-heading">
                <h4>{val.heading}</h4>
              </div>
              <p className="font-3-text">{val.text}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card3;
