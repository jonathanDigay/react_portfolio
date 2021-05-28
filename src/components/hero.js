import React,{useState} from "react"
import heroimage from "./album/me.png"


export default function Hero() {


    return (
        <div>
            <div  className= "hero" id="home">
                <div className="herofile">
                <img src={heroimage} alt=""/> 
                </div>   
                <div className="social_media">
                    <a href="https://web.facebook.com/jonathanPdigay/"><i className="fab fa-facebook"></i></a>
                    <a href="https://github.com/jonathanDigay"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/digay/"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    )
}
