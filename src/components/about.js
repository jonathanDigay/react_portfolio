import React from 'react'
import Image from "./album/aboutme.jpg"

export default function about() {
    return (
        <div>
            <div className="about_container" id="about">
                <div className="image_sec">
                    <img src={Image} alt=""/>
                    <div className="filter"></div>
                </div>
                <div className="about_sec">
                    <h1>ABOUT</h1>
                    <p>Iam Jonathan Digay From the province of Marinduque 
                        20 years old trying to master react liblary the 
                        most popular!, i start learning react since 2021,
                    </p>
                    <div className="filter"></div>
                </div>
            </div>
        </div>
    )
}
