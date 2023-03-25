import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about-containor">
        <h1 className="about-heading">About Us </h1>
        <div className="about-subcontainor">
          <p className="about-text">
            Sparkel is a team of enthusiastic event planners who love making
            your events a big success. There's a reason we are known as one of
            the best party organizers in Haryana. We have a team of dedicated
            and skilled professionals who are experts in their respective
            fields. They put the best of the elements together to make your
            party memorable and enjoyable.
          </p>
          <p className="about-text">
            It doesn't matter if you are planning a grand party or a customized
            theme party. We can customize the event as per your event and help
            you make the best out of your special day!
          </p>
        </div>
        <div className="customers-containor">
         <div className="happy-customers">
          <span>1000</span>
          <span>Happy Customers</span>
         </div>
         <div className="total-customers">
          <span>1050</span>
          <span>Total Events Done</span>

         </div>
        
        </div>
      </div>
    </>
  );
};

export default About;
