import "./card.css";
import manyCard from "../../../src/manycard";
import { useState } from "react";
const Card = () => {
  const [cardData, setcardData] = useState(manyCard);
  return (
    <>
      {cardData.map((val) => {
        return (
          <>
            <div className="row space" key={val.id}>
              <div className="container">
                <div className="card">
                  <div className="card-body">
                    <div className="icon">
                      <i className="fas fa-edit"></i>
                    </div>
                    <div className="head">
                      <h3>{val.heading}</h3>
                    </div>
                    <div className="text">
                      <p>{val.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Card;
