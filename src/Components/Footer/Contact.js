import React from "react"

const Contact = ()=>{
    return(<>
<div className="contact-containor">
    <form className="contact-form" autoFill="off">
        <label htmlFor="">Name 
        <input type={"text"} placeholder=" Enter Your Name" name="name"></input></label>
        <label htmlFor="">Phome No.
        <input type={"phone"} placeholder=" Enter Your Phone No. " name="phone"></input></label>
        <label htmlFor="">Email
        <input type={"email"} placeholder=" Enter Your Email" name="email"></input></label>
        <textarea type="text" placeholder="Enter Your Meassage ...."></textarea>
    </form>
        <div className="input-btn-box">
            <button className="input-btn">Submit</button>
        </div>
</div>
    </>)
}
export default Contact