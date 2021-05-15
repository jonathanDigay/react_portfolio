import React,{useState} from "react"
import axios from "axios"

export default function Contact(){
  const [state,setState]=useState({
    firstname:"",
    lastname:"",
    emailaddress:"",
    phonenumber:"",
    message:""
})
  const {firstname,lastname,emailaddress,phonenumber,message}=state
  const handleOnChange=(e)=>{
    const {name,value}=e.target
    setState({...state,[name]:value})

  }

  const Submit=(e)=>{
    e.preventDefault()

    const Person={
      firstname,
      lastname,
      emailaddress,
      phonenumber,
      message
    }
    console.log(Person)

    axios.post("http://localhost:3001/person/send", Person)

    setState({
      firstname:"",
      lastname:"",
      emailaddress:"",
      phonenumber:"",
      message:""
    })

  }

  return(
    <div>
        <div className="contact_main" id="contact">

            <div className="contact_wrapper">
                <div className="contact_bg"></div>
                 <div className="contact_info">
                   <h2>Contact Info</h2>
                   <div className="info">
                   <p className="telephone"><i className="fas fa-maps"></i> Santa Cruz Marinduque Philippines</p>
                   <p className="telephone"><i className="fas fa-phone"></i>  +63 9517146558</p>
                   <p className="telephone"><i className="fas fa-mail"></i>  jonathan.digay1@gmail.com</p>
                   </div>
                    <div className="social_media">
                      <i className="fab fa-facebook"></i>
                      <i className="fab fa-github"></i>
                    </div>
                 </div>
                 <div className="contact_message">
                     <h1>Send Message</h1>
                     <form className="form">
                         <div className="inputBox">
                         <input type="text" required
                          value={firstname}
                          name="firstname"
                          onChange={handleOnChange}
                         />
                         <span>First Name</span>
                         </div>
                         <div className="inputBox">
                         <input type="text"  required
                            value={lastname}
                            name="lastname"
                            onChange={handleOnChange}
                         />
                         <span>Last Name</span>
                         </div>
                         <div className="inputBox">
                         <input type="email"  required 
                            value={emailaddress}
                            name="emailaddress"
                            onChange={handleOnChange}
                         />
                         <span>Email</span>
                         </div>
                         <div className="inputBox">
                         <input type="text"  required 
                            value={phonenumber}
                            name="phonenumber"
                            onChange={handleOnChange}
                         />
                          <span>Phone Number</span>
                         </div>
                         <div className="inputBox span2 textarea">
                         <textarea required
                            value={message}
                            name="message"
                            onChange={handleOnChange}
                         ></textarea>
                         <span>Message</span>
                         </div>
             
                         <div className="span2 send">
                         <button type="submit" onClick={Submit}>Send</button>
                         </div> 
                     </form>
                   </div>
            </div>
        </div>
        <br />
        <br /><br />
        <br />
    </div>
  )
}