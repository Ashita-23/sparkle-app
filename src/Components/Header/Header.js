import React from "react"
import "./Header.css"
const Header = ()=>{
    return(<>
 <div className="header-box">
    <nav className="header-nav">
        <div className="nav-logo"> <i className="fa-solid fa-star-half-stroke"></i><span>{" "}</span>Sparkle</div>
        <div className="nav-links">
        <ul>
         <li><a href="#home">home</a></li>
         <li><a href="#services">services</a></li>
         <li><a href="#contact">contact</a></li>
         <li><a href="#about">about</a></li>
        </ul>
        </div>
        <div className="link_btn">
            <span><i className="fa-solid fa-bars bar_icon"></i></span>
        </div>
    </nav>
 </div>
    </>)
} ;

export default Header