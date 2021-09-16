import "./new.css";
const News = () => {
  return (
    <>
      <div className="news-main">
        <h1 className="news-heading mt-5">Latest News</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          ullamcorper <br></br>neque dapibus ipsum semper, sit amet luctus
          turpis porttitor.
        </p>
      </div>
      <div className="row mt-5 container ps-md-5">
        <div className="col-md-4 ps-md-5 pb-5 show-media">
          <div className="news-box">
            <div className="news-imgbox">
              <img src="./laptop1.jpg" />
            </div>
            <div className="news-details">
              <div className="news-content">
                <p>Web Design</p>
                <h3>Stretgy</h3>
                <i className="fa fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
