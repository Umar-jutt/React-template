import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Section from "./component/section/section";
import Card from "./component/card/card";
import Services from "./component/services/services";
import Card2 from "./component/card2/card2";
import About from "./component/about/about";
import Card3 from "./component/card3/card3";
import Success from "./component/success/success";
import Workprocess from "./component/workprocess/workprocess";
import Card4 from "./component/card4/card4";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section />
      <div className="d-flex umar">
        <Card />
      </div>
      <Services />
      <div>
        <Card2 />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Card3 />
      </div>
      <div>
        <Success />
      </div>
      <div>
        <Workprocess />
      </div>
      <div>
        <Card4 />
      </div>
    </div>
  );
}

export default App;
