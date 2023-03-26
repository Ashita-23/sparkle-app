import React from "react"
import "./Header.css"
const Header = ()=>{
    return(<>
 <div className="header-box">
    <nav className="header-nav">
        <div className="nav-logo">Sparkle</div>
        <div className="nav-links">
        <ul>
         <li><a href="#home">home</a></li>
         <li><a href="#services">services</a></li>
         <li><a href="#contact">contact</a></li>
         <li><a href="#about">about</a></li>
        </ul>
        </div>
    </nav>
 </div>
    </>)
} ;

export default Header