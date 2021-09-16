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
import Showcase from "./component/showcase/showcase";
import News from "./component/news/news";
import Ourteam from "./component/ourteam/ourteam";
import Talk from "./component/talk/talk";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section />
      <Card />

      <Services />
      <Card2 />
      <About />
      <Card3 />
      <Success />
      <Workprocess />
      <Card4 />
      <Showcase />
      <News />
      <Ourteam />
      <Talk />
    </div>
  );
}

export default App;
