import "./success.css";
import image from "../../../src/assets/man.jpg";
const Success = () => {
  return (
    <>
      <div className="row container mt-5">
        <div className="col-md-5">
          <img className="image" src={image}></img>
        </div>
        <div className="col-md-7 success-media">
          <div className="heading">
            <h1>Success Story</h1>
            <p>ONLINE MARKETING SOLUTIONS.</p>
          </div>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              eget lectus eu ex ornare porta euismod a libero. Phasellus
              vehicula placerat enim at egestas. Aliquam suscipit felis in massa
              hendrerit tristique. In augue diam, pellentesque nec pulvinar in,
              sagittis ac nulla. Sed eu lectus vitae justo vehicula viverra.
            </p>
          </div>
          <div className="writter">
            <p>BEN JAMES, CLIENT</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
