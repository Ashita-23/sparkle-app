import React from "react"
import "./ServiceCard.css"




const  Services = (props) =>{
   
    return(<>
        <div className="service-card" key={props.kye}>
            <figure className="service-card-img-box">
                <img className="service-card-img" src={props.imgs} alt="Service_image"/>
            </figure>
            
            <figcaption className="service-name">{props.title}</figcaption>
            <button className="service-btn">Book Now</button>
        </div>
    </>)
}

export default  Services 