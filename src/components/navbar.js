import React, { useState } from 'react'

import { HashLink as Link } from "react-router-hash-link"
import Navbartoogle from "./navbartoogle.js"

function Navbar() {
    const [navbar, setnavbar] = useState(false)
    const [project, setproject] = useState(false)
     const [active, isactive]=useState("Home")
    const scrollNav = () => {
        window.scrollY >= 80 ?
            setnavbar(true)
            : setnavbar(false)
    }
    window.addEventListener("scroll", scrollNav)

    const Projects = () => {
        project === false ?
            setproject(true)
            : setproject(false)
    }

    const Active=(e)=>{
        const target= e.target.innerText
        isactive(target)
    }

    return (
        <div>
            <div className={navbar === true ? 'navbar navbar_active ' : 'navbar'}>
                <h3 ><span>D</span>iga<span>Y</span><span>R</span>eac<span>T</span></h3>

                <nav className="navmenu " >
                    <Link onClick={Active} className={active==="Home"?"li_active":""} smooth="true" exact="true" to="#home">Home</Link>
                    <Link onClick={Active} className={active==="About"?"li_active":""} smooth="true" exact="true" to="#about" >About</Link>
                    <li className="projectMenu"  smooth="true" exact="true" to="#projects" onClick={Projects} >Projects <i className="fas fa-angle-down"></i>

                        {
                            project === true ?
                            
                                <nav className={navbar === true ? 'project_active ' : ''}>
                                <Link smooth="true" exact="true" to="#todolist">Todolist</Link>
                                <Link smooth="true" exact="true" to="#weatherapp">Weather</Link>
                            </nav>
                            : ""
                            
       
                        }

                    </li>
                    <Link onClick={Active} className={active==="Contact"?"li_active":""} smooth="true" exact="true" to="#contact">Contact</Link>

                </nav>
                <Navbartoogle />
            </div>

        </div>
    )
}

export default Navbar
