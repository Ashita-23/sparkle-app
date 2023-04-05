import React from "react"
import "./menuCards.css"


const MenuCards = (values) =>{
    const {menuData} = values
    const {imgs,title} = menuData
    return(<>
        <React.Fragment>
        <div className="menu-cards"  >
  <figure className="img-box">
  <img src={imgs} alt="images" className="image"/> 
  </figure>
 <p className="menu-name">{title}</p>
 <button className="service-btn">Book Now</button>
    </div>
    </React.Fragment>
    </>)
}

export default MenuCards