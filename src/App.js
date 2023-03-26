import "./App.css";
import './Components/Header/utilityStyle.css'
import Header from "./Components/Header/Header";
import Home from "./Components/Header/Home";
import Services from "./Components/Body/Services";
import About from "./Components/Body/About";
import Contact from "./Components/Footer/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <Home></Home>
      <div className="service-card-containor">
      <h1>our services</h1>
      <Services></Services>
      <Services></Services>
      <Services></Services>
      <Services></Services>
      <Services></Services>
      </div>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
