import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-containor">
        <div className="social-links-box">
          <h1 className="social-heading">
            <i class="fa-solid fa-star-half-stroke"></i>
            <span> </span>Sparkle
          </h1>
          <p className="social-title">
            {" "}
            Sparkle serve you best catering service in Haryana NCR as we serve
            you with the top-notch quality of food and other services
          </p>
          <div className="social-icons">
            <p>
              <i class="fa-solid fa-phone"></i>
            </p>
            <p>
              <i class="fa-brands fa-facebook"></i>{" "}
            </p>
            <p>
              <i class="fa-brands fa-instagram"></i>{" "}
            </p>
            <p>
              <i class="fa-brands fa-youtube"></i>
            </p>
            <p>
              <i class="fa-brands fa-linkedin"></i>
            </p>
          </div>
        </div>

        <div className="address-containor">
          <p className="address-box">
        
            <i class="fa-solid fa-location-dot"></i><span>{" "}</span>
            Aggarwal Tower, Block CU, Office No. 301, 302, Behind Income Tax
            Colony, Pitampura, New Delhi - 110034, India
          </p>
          <p className="address-box">
            <i class="fa-solid fa-phone"></i> <span>{" "}</span>+91-9910277066
          </p>
          <p className="address-box">
            <i class="fa-solid fa-at"></i> <span>{" "}</span>sparkle302@gmail.com
          </p>
        </div>
      </div>
      <div className="footer-subcontainor">
        
          <p>
          Copyright <span>{" "}</span><i class="fa-regular fa-copyright"></i> 2019 · All Rights Reserved Sparkle .
          </p>
      
      </div>
    </>
  );
};

export default Footer;
