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
                     i start learning react since february 2021,
                    </p>
                    <div className="filter"></div>
                </div>
            </div>
        </div>
    )
}
