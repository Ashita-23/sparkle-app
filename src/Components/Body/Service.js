import React, { useState }  from "react";
import "./Service.css"
import Services from "./ServiceCards";
import{ ServiceApi} from "./serviceApi"



const ServiceBox =()=>{
    const [cardData , setCardData] = useState(ServiceApi)
    const CardDatas =()=>{
setCardData()
    }
    console.log(cardData)
    return(<>
 <div className="service-card-containor">
<p className="service-heading">our services</p>
<div className="serviceCards-holder">


{
    cardData.map((val)=>{
        return(
            <>
            <Services key={val.key}
            src={val.imgs}
            title = {val.title} />
            </>
        )
    })
}

</div>
</div>
    </>)
}

export default ServiceBox

























