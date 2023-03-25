import "./App.css";
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
      <Services></Services>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
