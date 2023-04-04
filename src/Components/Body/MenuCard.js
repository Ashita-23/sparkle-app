import React from "react"
import "./menuCard.css"
import { MenuApi} from "./serviceApi"

const MenuCard = () => {
    
    return(<>
<div className="menu-outer">
<h1 className="menu-header">Our Menu</h1>
<div className="menu-cards-holder">

{  MenuApi.map((val) => {
    return(<>
        <div className="menu-cards" key={val.id}>
  <figure className="img-box">
  <img src={val.imgs} alt="images" className="image"/> 
  </figure>
 <p className="menu-name">{val.title}</p>
 <button className="service-btn">Book Now</button>
    </div>
    </>)
})
   }
   </div>
</div>
    </>)
}

export default MenuCard