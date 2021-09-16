import "./ourteam.css";
import ourTeamApi from "../../ourteamapi";
import { useState } from "react";
const Ourteam = () => {
  const [team, setTeam] = useState(ourTeamApi);
  console.log(team);
  return (
    <>
      <div className="our-heading mb-5">
        <h1>Our Team</h1>
      </div>
      <div className="row mb-5">
        {team.map((val) => {
          return (
            <div className="col-md-4 hov" key={val.id}>
              <img src={val.img} />
              <section className="our-team-content">
                <div className="our-team-heading">
                  <h3>john smith</h3>
                  <p>software engineer</p>
                  <div className="out-team-icons d-flex">
                    <i className="fa fa-facebook our-icon"></i>
                    <i className="fa fa-twitter our-icon"></i>
                    <i className="fa fa-instagram our-icon"></i>
                  </div>
                </div>
              </section>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Ourteam;
<>
  <h1>Our Team</h1>
</>;
