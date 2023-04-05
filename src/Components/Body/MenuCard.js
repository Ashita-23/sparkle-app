import React from "react"
import "./menuCard.css"
import { MenuApi} from "./serviceApi"

const MenuCard = () => {
    
    return(<>
<div className="menu-outer">
<h1 className="menu-header">Our Menu</h1>
<div className="menu-cards-holder">

{  MenuApi.map((values) => {
    return(<React.Fragment key={values.id}>
        <div className="menu-cards" >
  <figure className="img-box">
  <img src={values.imgs} alt="images" className="image"/> 
  </figure>
 <p className="menu-name">{values
 .title}</p>
 <button className="service-btn">Book Now</button>
    </div>
    </React.Fragment>)
})
   }
   </div>
</div>
    </>)
}

export default MenuCard