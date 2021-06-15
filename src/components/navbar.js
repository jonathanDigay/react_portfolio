import React, { useState } from 'react'
import Navbartoogle from "./navbartoogle.js"

function Navbar() {
    const [project, setproject] = useState(false)
    const [active, isactive] = useState("Home")


    const Projects = (e) => {
        const target = e.target.innerText
        isactive(target)
        project === false ?
            setproject(true)
            : setproject(false)
    }

    const Active = (e) => {
        const target = e.target.innerText
        isactive(target)
    }
    return (
        <div>
            <div id="navbar" className='navbar'>
                <h3 ><span>D</span>iga<span>Y</span><span>R</span>eac<span>T</span></h3>

                <nav className="navmenu " >
                    <li onClick={Active} className={active === "Home" ? "li_active" : ""}> <a href="#home">Home</a> </li>
                    <li onClick={Projects}
                        className={active === "Projects" ? "li_active projectMenu" : "projectMenu"}
                    > <a href="#project"> Projects</a>

                        {
                            project === true ?

                                <nav>
                                    <li onClick={Active} className={"Todolist" === "Home" ? "li_active" : ""}> <a href="#todolist"> Todolist</a></li>
                                    <li onClick={Active} className={"Weather" === "Home" ? "li_active" : ""}> <a href="#weather">Weather</a> </li>
                                </nav>
                                : ""


                        }

                    </li>
                    <li onClick={Active} className={active === "Contact" ? "li_active" : ""}> <a href="#contact">Contact</a> </li>

                </nav>
                <Navbartoogle />
            </div>
        </div>
    )
}

export default Navbar
