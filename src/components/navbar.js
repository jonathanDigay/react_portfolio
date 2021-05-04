import React,{useState} from 'react'
import { Link } from "react-router-dom"


import Navbartoogle from "./navbartoogle.js"
function Navbar() {
    const [navbar,setnavbar]=useState(false)

    const scrollNav=()=>{
        window.scrollY>=80?
        setnavbar(true)
        :setnavbar(false)
    }
    window.addEventListener("scroll",scrollNav)
    return (
        <div>
            <div className={navbar===true?'navbar navbar_active':'navbar'}>
                <h3 ><span>D</span>iga<span>Y</span><span>R</span>eac<span>T</span></h3>

          
                <div className="navmenu " >
                    <Link to=".hero" href=".about"className='active'>Home</Link>
                    <Link to=".navmenu">Projects</Link>
                    <Link to="./about.js">About</Link>
                    <Link to=".navmenu">Contact</Link>
                </div>
                <Navbartoogle
                  to={".navmenu"}
                 />
            </div>
        </div>
    )
}

export default Navbar
