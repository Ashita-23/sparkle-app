import React  from "react";
import "./Service.css"
import Services from "./ServiceCards";
import{ ServiceApi} from "./serviceApi"



const ServiceBox =()=>{

    // console.log(ServiceApi)
    return(<>
 <div className="service-card-containor">
<p className="service-heading">our services</p>
<div className="serviceCards-holder">


{
 ServiceApi.map((values)=>{
        return(
            <>
            <Services cardData = {values} />
            </>
        )
    })
}

</div>
</div>
    </>)
}

export default ServiceBox

























