
import { useState } from "react";
import "./Header.css"
import './HeaderMedia.css'
// import {Link} from "react-scroll"
const Header = ()=>{

const [openNav , setOpenNav] = useState(false)

function ToggleHandler(){
    if(openNav === false){
        setOpenNav(true)
    }else if (openNav === true){
        setOpenNav(false)
    }
}

    return(<>
    <nav className="header-nav">
    {/* logo */}
        <div className="nav-logo"> <i className="fa-solid fa-star-half-stroke"></i><span>{" "}</span>Sparkle</div>
    
            {/* bar-icon */}
        <div className="link_btn"  >
            <span onClick={()=>ToggleHandler()} ><i className="fa-solid fa-bars bar_icon" ></i></span>
        </div> 

        {/* nav-link */}
       
        <ul className= "nav-link-box ">
         <li className="nav-links"><a href="#home" className="nav-links-a " >home</a></li>
         <li className="nav-links"><a href="#service" className="nav-links-a " >services</a></li>
         <li className="nav-links"><a href="#contact"  className="nav-links-a ">Contact</a></li>
         <li className="nav-links"><a href="#about" className="nav-links-a " >About</a></li>
        </ul>

    
        </nav>
        <ul className= {!openNav ? "toggle-link-box hide-toggle-list":"toggle-link-box" }>
         <li className="toggle-links"><a href="#home"  className="toggle-links-a"  >home</a></li>
         <li  className="toggle-links"><a href="#service" className="toggle-links-a"  >services</a></li>
         <li  className="toggle-links"><a href="#contact" className="toggle-links-a"  >Contact</a></li>
         <li  className="toggle-links"><a href="#about" className="toggle-links-a"  >About</a></li>
        </ul>

    </>)
} ;


export default Header