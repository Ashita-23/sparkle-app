import React from "react"
import "./menuCard.css"

const MenuCard = () => {
    return(<>
<div className="menu-outer">
<h1 className="menu-header">Our Menu</h1>
    <div className="menu-cards">
  <figure className="img-box">
  <img src={" "} alt={""} className="image"/> 
  </figure>
 <p className="menu-name"></p>
    </div>
</div>
    </>)
}

export default MenuCard