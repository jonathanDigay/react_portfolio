import { useState } from "react"
import axios from "axios"

export const useForm = (initialvalue) => {

  const [values, setvalues] = useState(initialvalue)

  let {firstname,lastname,emailaddress,phonenumber,message}=values

  const handleOnChange = (e) => {
    setvalues({
      ...values,
      [e.target.name]:e.target.value
    })
  }


  const Submit = (e) => {
    e.preventDefault()
    const Person = {
      firstname, lastname, emailaddress, phonenumber, message
    }
    axios.post("http://localhost:3001/person/send", Person)

    setvalues({
        firstname:"",lastname:"",emailaddress:"",phonenumber:"",message:""
    })
  }

  return [
    values,
    handleOnChange,
    Submit,
  ]

}

