import React from "react"
import "./menu.css"
import "./MenuMedia.css"
import { MenuApi} from "../ServiceComponents/serviceApi"
import MenuCards from "./MenuCards"

const Menu = () => {
    
    return(<>
<div className="menu-outer">
<h1 className="menu-header" id="AB00">Our Menu</h1>
<div className="menu-cards-holder"  id="CD00">
 {  MenuApi.map((values) => {
 return(<>
     <MenuCards   menuData = {values} key={values.id} />
    </>)
})
   } 
   </div>
</div>
    </>)
}

export default Menu