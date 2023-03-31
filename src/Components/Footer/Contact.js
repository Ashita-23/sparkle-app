import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [inputData, setNewInput] = useState(

{
     name: " ",
     phoneNo: " ",
     email: " ",
   message: " ",
}
  );
  return (
    <>
      <div className="contact-containor">
        <p className="contact-heading">Contact Us </p>
        <form className="contact-form">
          <label htmlFor="">
            Name
            <input
              type={"text"}
              placeholder=" Enter Your Name"
              name={"name"}
              value={inputData.name}
              onChange={(e) => setNewInput(e.target.value)}
              autoComplete={"off"}
            ></input>
          </label>
          <label htmlFor="">
            Phone No.
            <input
              type={"phone"}
              placeholder=" Enter Your Phone No. "
              name={"phoneNo"}
              value={inputData.phoneNo}
              onChange={(e) => setNewInput(e.target.value)}
              autoComplete={"off"}
            ></input>
          </label>
          <label htmlFor="">
            Email Id.
            <input
              type={"email"}
              placeholder=" Enter Your Email"
              name={"email"}
              value={inputData.email}
              onChange={(e) => setNewInput(e.target.value)}
              autoComplete={"off"}
            ></input>
          </label>
          <label htmlFor="message">
            message...
            <textarea
              type={"text"}
              name={"message"}
              placeholder="Enter Your Meassage ...."
              value={inputData.message}
              onChange={(e) => setNewInput(e.target.value)}
              autoComplete="off"
            ></textarea>
          </label>
          <label htmlFor="submit">
            <button className="form-btn">submit</button>
          </label>
        </form>
      </div>
    </>
  );
};
export default Contact;
