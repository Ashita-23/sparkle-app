import React, { useState ,  useEffect } from "react";
import "./Contact.css";
import "./ContactMedia.css";




const Contact = () => {
  const InitialValues = { usersName: " ", usersPhNo: " ", usersEmail: " ", usersMessage: " ",}
  const [inputData, setNewInput] = useState(InitialValues);
  const [FormErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  console.log(FormErrors,'formerrors')



  const OnDataEnter = (e) =>{
    // console.log(e.target.value,e.target.name)
    const {name,value}  = e.target;

    setNewInput({...inputData,[name]:value})
    console.log(inputData)
    // console.log("name",name)
    // console.log("value",value)
  }


const OnSubmitHanlder = (e)=>{ 
  e.preventDefault()
  setFormErrors(FormValidation(inputData))
  setIsSubmit(true)
 }


const FormValidation = (values)=>{
  const errors = {} ;
  console.log(errors,'error')
  const EmailRegex = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/ ;
  const PhNoRegex = /^\d{10}$/;

  if(values.usersName === " "){
    errors.usersName = "User name is required!";
  }
  if(values.usersPhNo === " "){
    errors.usersPhNo = "User Contact no is required!";
  }else if(!PhNoRegex.test(values.usersPhNo)){
    errors.usersPhNo = "Please enter valid number!";
  }
  if(values.usersEmail === " "){
    errors.usersEmail = "User Email is required!";
  }else if(!EmailRegex.test(values.usersEmail)){
    errors.usersEmail = "Please enter valid email!";
  }
  return errors
}

 useEffect(()=>{
   console.log(FormErrors,'formErrors-box')
  if(Object.values(FormErrors).length ===0 && isSubmit){
    console.log(inputData,'fromUseEffeGmailct')
    alert("Thank you ! please contact via  linkedin link given below .")
  }},[FormErrors])

  return (
    <>
      <div className="contact-containor" id="contact" >
        <h2 className="contact-heading">Contact Us </h2>
        {/* {(Object.values(FormErrors).length ===0 && isSubmit)? <h3>form iss  sucessfuly send!</h3> : " "} */}
        <form className="contact-form" onSubmit={OnSubmitHanlder}>
          <label htmlFor="">
            Name
            <input
              type={"text"}
              name="usersName"
              // placeholder=" Enter Your Name"
              value={inputData.usersName}
              onChange={(e) =>OnDataEnter(e)}
              autoComplete="off"
            ></input>
          
          </label>
          <p className="error-text">{FormErrors.usersName}</p>
          <label htmlFor="">
            Phone No.
            <input
              type={"phone"}
              name="usersPhNo"
              // placeholder=" Enter Your Phone No. "
              value={inputData.usersPhNo}
              onChange={(e) =>OnDataEnter(e)}
              autoComplete="off"
            ></input>
            

          </label>
          <p className="error-text">{FormErrors.usersPhNo}</p>

          <label htmlFor="">
            Email Id.
            <input
              type={"email"}
              name="usersEmail"
              // placeholder=" Enter Your Email"
              value={inputData.usersEmail}
              onChange={(e) =>OnDataEnter(e)}
              autoComplete="off"
            ></input>
          </label>
          <p className="error-text">{FormErrors.usersEmail}</p>

          <label htmlFor="message">
            message...
            <textarea
              type={"text"}
              name="usersMessage"
              // placeholder="Enter Your Meassage ...."
              value={inputData.usersMessage}
              onChange={(e) =>OnDataEnter(e)}
              autoComplete="off"
            ></textarea>
          </label>
          <label htmlFor="submit">
            <button className="form-btn" >submit</button>
          </label>
        </form>
      </div>
    </>
  );
};
export default Contact;
