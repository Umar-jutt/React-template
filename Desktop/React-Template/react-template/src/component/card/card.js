import "./card.css";
import manyCard from "../../../src/manycard";
import { useState } from "react";
const Card = () => {
  const [cardData, setcardData] = useState(manyCard);
  return (
    <>
      <div className="row container ps-5">
        {cardData.map((val) => {
          return (
            <div className="col-md-4 " key={val.id}>
              <div className="card1 mx-md-3 media">
                <i className={val.icon}></i>
                <h2 className="head">{val.heading}</h2>
                <p className="text">{val.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
