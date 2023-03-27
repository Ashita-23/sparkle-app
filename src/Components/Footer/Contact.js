import React from "react"
import "./Contact.css"

const Contact = ()=>{
    return(<>

<div className="contact-containor">
<p className="contact-heading">Contact Us </p>
    <form className="contact-form" >
        <label htmlFor="">Name 
        <input type={"text"} placeholder=" Enter Your Name" name="name" autoComplete="off"></input></label>
        <label htmlFor="">Phone No.
        <input type={"phone"} placeholder=" Enter Your Phone No. " name="phone" autoComplete="off"></input></label>
        <label htmlFor="">Email Id.
        <input type={"email"} placeholder=" Enter Your Email" name="email" autoComplete="off"></input></label>
        <label htmlFor="message">message...
        <textarea type="text" name="message" placeholder="Enter Your Meassage ...." autoComplete="off"></textarea></label>
        <label htmlFor="submit">
           <button className="form-btn">submit</button>
        </label>
    </form>
       
        
</div>
    </>)
}
export default Contact