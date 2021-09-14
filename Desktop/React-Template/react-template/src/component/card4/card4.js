import "./card4.css";
import manyCard4 from "../../manycard4";
import { useState } from "react";
const Card4 = () => {
  const [card4, setCard4] = useState(manyCard4);
  console.log(card4);
  return (
    <>
      <div className="row container">
        <div className="col-md-4">
          <div className="d-flex">
            <i className="fa fa-facebook"></i>
            <div className="direction">
              <h2>heading</h2>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                  ipsa voluptatibus
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card4;
