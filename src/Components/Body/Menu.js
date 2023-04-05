import React from "react"
import "./menu.css"
import { MenuApi} from "./serviceApi"
import MenuCards from "./MenuCards"

const Menu = () => {
    
    return(<>
<div className="menu-outer">
<h1 className="menu-header">Our Menu</h1>
<div className="menu-cards-holder">

 {  MenuApi.map((values) => {
 return(<>
     <MenuCards  key={values.id} menuData = {values} />
    </>)
})
   } 
   </div>
</div>
    </>)
}

export default Menu