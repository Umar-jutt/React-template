import "./card2.css";
import manyCard2 from "../../manycard2";
import { useState } from "react";
import Card3 from "../card3/card3";
const Card2 = () => {
  const [card2, setcard2] = useState(manyCard2);
  return (
    <>
      <div className="row">
        {card2.map((val) => {
          return (
            <div className="col-md-4" key={val.id}>
              <div className="row card2 mt-5">
                <div className="col-md-3 file-icon ">
                  <i className="fa fa-file-alt"></i>
                </div>
                <div className="align">
                  <div className="col-md-6">
                    <h3 className="text-2">{val.text}</h3>
                  </div>
                  <div className="col-md-3 arrow">
                    <i className={val.icon2}></i>
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

export default Card2;
