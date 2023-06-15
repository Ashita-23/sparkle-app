import React from "react";
import "./Footer.css";
import "./FooterMedia.css";

const Footer = () => {
  return (
    <>
      <div className="footer-containor">
        <div className="social-links-box">
          <h1 className="social-heading">
            <i className="fa-solid fa-star-half-stroke"></i>
            <span> </span>Sparkle
          </h1>
          <p className="social-title">
            {" "}
            Sparkle serve you best catering service in Haryana NCR as we serve
            you with the top-notch quality of food and other services.
          </p>
          <div className="social-icons">
            <p>
              <i className="fa-solid fa-phone phones"></i>
            </p>
            <p>
              <i className="fa-brands fa-facebook facebooks"></i>{" "}
            </p>
            <p>
              <i className="fa-brands fa-instagram instras"></i>{" "}
            </p>
            <p>
              <i className="fa-brands fa-youtube Utube"></i>
            </p>
            <p>
             <a href="https://www.linkedin.com/in/ashita-kr/" target="blank"> <i className="fa-brands fa-linkedin linkedins"></i></a>
            </p>
          </div>
        </div>

        <div className="address-containor">
          <p className="address-box">
            <i className="fa-solid fa-location-dot locations-gmail"></i>
            <span> </span>
            Aggarwal Tower, Block CU, Office No. 301, 302, Behind Income Tax
            Colony, Pitampura, New Delhi - 110034, India .
          </p>
          <p className="address-box">
            <i className="fa-solid fa-phone pcall"></i> <span> </span>
            +91-9910277066
          </p>
          <p className="address-box">
            <i className="fa-solid fa-at locations-gmail"></i> <span> </span>
            sparkle302@gmail.com
          </p>
        </div>
      </div>
      <div className="footer-subcontainor">
        <p>
          Copyright <span> </span>
          <i className="fa-regular fa-copyright"></i> 2019 · All Rights Reserved
          Sparkle .
        </p>
      </div>
    </>
  );
};

export default Footer;
