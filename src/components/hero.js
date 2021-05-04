import React,{useState} from 'react'
import heroimage from "./album/me.png"
import {Link} from "react-router-dom"

export default function Hero() {
    const [hero,sethero]=useState(false)

    const Scrollhero=()=>{
        window.scrollY>=200?
        sethero(true)
        :sethero(false)
    }

    window.addEventListener("scroll",Scrollhero)
    return (
        <div>
            <div className= {hero===true?"hero hero_scoll_effect":"hero"}>
                <div className="herofile">
                <img src={heroimage} alt=""/> 
                </div>   
                <div className="social_media">
                    <Link to="https://web.facebook.com/jonathandigay05/"><i className="fab fa-facebook"></i></Link>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-linkedin"></i>
                </div>
                <div className="scroll_down">
                    <div className="line"></div>
                    <div className="fas fa-angle-down"></div>
                    <p>scroll</p>
                </div>
                <div className="hero_title"><h2>LEARN TO REST NOT TO STOP</h2>
                  <p>even you fail don't give up</p>
                </div>
            </div>
        </div>
    )
}
