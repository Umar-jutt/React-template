import "./card2.css";
import manyCard2 from "../../manycard2";
import { useState } from "react";
const Card2 = () => {
  const [card2, setcard2] = useState(manyCard2);
  console.log(card2);
  return (
    <>
      <div className="row ps-3">
        {card2.map((val) => {
          return (
            <div className="col-md-4" key={val.id}>
              <div className="card2 d-flex">
                <div className=" file">
                  <i className="fa fa-file-alt"></i>
                </div>
                <div className="text-2">
                  <h3>{val.text}</h3>
                </div>
                <div>
                  <i className="fa fa-long-arrow-right arrow"></i>
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
