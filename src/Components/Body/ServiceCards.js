import React from "react"
import "./ServiceCard.css"




const  Services = (props) =>{
const{cardData} = props
    const {id , imgs , title} = cardData
//    console.log(props)
    return(<>
        <div className="service-card" keys={id}>
            <figure className="service-card-img-box">
                <img className="service-card-img" src={imgs} alt="Service_image"/>
            </figure>
            
            <figcaption className="service-name">{title}</figcaption>
            <button className="service-btn">Book Now</button>
        </div>
    </>)
}

export default  Services 