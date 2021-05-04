import React,{useState } from "react";
import Sunny from "./album/sunny.jpg"

export default function Wheatherapp() {

  const [form, setform] = useState({
    city:"",
    country:""
  })
  const [weather,setweather]=useState([])

  const { city, country } = form

  const formonChange = (element) => {

    const { value, name }=element.target

    setform({...form,[name]:value})
  }



  const Search=async(e)=>{
    const API="dbbbb981c9d74abfa85120525210205";
   
    e.preventDefault()
    if(city==="" || country===""){
      alert("Please complete Fillup the Form")
    }else{
     const Data= await fetch(`https://api.weatherapi.com/v1/current.json?key=${API}&q=${city},${country}`)
      .then(res=>res.json()).then((data)=>data)

      setweather(Data)
      console.log(weather)
    }


  }



  return (
    <div>
      <div className="wheatherapp_conatiner">
        <h4>Project #2:Wheather App</h4>
        <div className="wheatherapp_wrapper">

          <div className="wheather_form">
            <input type="text" placeholder="Type Country..."
              onChange={formonChange}
              value={country}
              name="country" />
            <input type="text" placeholder="Type City..."
              onChange={formonChange}
              value={city}
              name="city" />
            <button onClick={Search}>Search</button>
          </div>




          <div className="wheather_info">
             <div className="sunny">
               <img src={Sunny} alt=""/>
             </div>
      
            <div className="wheather_temp">
              <i className="fas fa-sun"></i>
  
              <h1> <sup>o</sup> </h1>
            </div>


            <div className="whether_desciption">
              <h2>Sunny</h2>
              <p> </p>
            </div>

            <div className="wheather_address">
              <p>Date:{new Date().toLocaleDateString()} As of {new Date().toLocaleTimeString()}</p>
              <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
            </div>

          </div>


        </div>

      </div>

    </div>
  );
}
