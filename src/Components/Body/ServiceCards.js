import React from "react"
import "./ServiceCard.css"

const  Services = () =>{
    return(<>
        <div className="service-card">
            <figure className="service-card-img-box">
                <img className="service-card-img" src={""} alt="Service_image"/>
            </figure>
            
            <figcaption className="service-name">{"title"}</figcaption>
            <button className="service-btn">Book Now</button>
        </div>
    </>)
}

export default  Services 