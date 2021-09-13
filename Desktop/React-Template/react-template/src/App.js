import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Section from "./component/section/section";
import Card from "./component/card/card";
import Services from "./component/services/services";
import Card2 from "./component/card2/card2";
import About from "./component/about/about";

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
      <About />
    </div>
  );
}

export default App;
