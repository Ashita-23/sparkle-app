import React from "react";
import "./Home.css";
import "./HomeMedia.css";

const Home = () => {
  return (
    <>
      <div className="home-containor" id="home">
        <div className="home-card">
          <h1 className="card-heading">SPARKLE PARTY ORGANISER</h1>
          <h2 className="card-subheading">Party Organisers, Planners in Haryana</h2>
          <p className="card-descreption">
            Parties are moments of joy and happiness and thus, deserve a huge
            celebration. Having the excitement of throwing a birthday party is
            quite genuine. But how to go about planning and organizing a
            birthday bash? Well, birthday party organizers in Haryana are the
            answer! If you are looking for the best birthday party organizers in
            Haryana, your search ends at GP Events.
          </p>
          <a href="#contact"> <button className="home-btn">Conatct us </button></a>
        </div>
      </div>
    </>
  );
};

export default Home 
