import "./App.css";
import './Components/Header/utilityStyle.css'
import Header from "./Components/Header/Header";
import Home from "./Components/Header/Home";
import ServiceBox from "./Components/Body/Service";
import About from "./Components/Body/About";
import Contact from "./Components/Footer/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <Home></Home>
     
  
    <ServiceBox></ServiceBox>

      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
