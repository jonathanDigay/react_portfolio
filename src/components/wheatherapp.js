import React, { useState } from "react"
import Sunny from "./album/sunny.jpg"
import Cloudy from "./album/cloudy.jpg"


export default function Wheatherapp() {

  const [form, setform] = useState({
    city: "",
    country: ""
  })
  const [weather, setWeather] = useState()

  const { city, country } = form

  const formonChange = (element) => {
    const { value, name } = element.target
    setform({ ...form, [name]: value })
  }



  const Search = async (e) => {
    const API = "dbbbb981c9d74abfa85120525210205";

    e.preventDefault()
    if (city === "" || country === "") {
      alert("Please complete Fillup the Form")
    } else {
      const Data = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API}&q=${city},${country}`)
        .then(res => res.json()).then((data) => data)

      setWeather(Data)

    }


  }



  return (
    <div id="weather">
      <div className="wheatherapp_conatiner" >
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


          {
            weather !== undefined ?

              <div className="wheather_info">
                <div className="temp_bg">
                  {
                    weather.current.temp_c >= 31 ?
                      <img src={Sunny} alt="" />
                      :
                      <img src={Cloudy} alt="" />
                  }
                </div>

                <div className="wheather_temp">
                  {
                    weather.current.temp_c >= 31 ?
                      <i className="fas fa-sun"></i>
                      :
                      <i className="fas fa-cloud"></i>
                  }
                  <h1> {weather.current.temp_c} <sup>o</sup> </h1>
                </div>


                <div className="whether_desciption">
                  <h3>{weather.location.region},{weather.location.country}</h3>
                </div>

                <div className="wheather_address">
                  <p>Date:{new Date().toLocaleDateString()} As of {new Date().toLocaleTimeString()}</p>
                </div>

              </div>
              : <div className="wheather_info">
                <div className="weather_bg">
                  <img src={Sunny} alt="" />
                  <img src={Cloudy} alt="" />
                  <h1 className="default_text">Search weather on your area </h1>
                </div>



              </div>
          }

        </div>

      </div>

    </div>
  );
}
