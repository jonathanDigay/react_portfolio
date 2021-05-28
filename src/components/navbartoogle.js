import React, { useState } from 'react'
import { HashLink as Link } from "react-router-hash-link"

export default function Navbartoogle() {
    const [state, setState] = useState(false)

    const Show = () => {
     setState(true)
    }
    const hide = () => {
        setState(false)
    }
    

    return (
        <div>
            <div className="tooglemenu">
                <i className={state===false?'fas fa-bars':""} onClick={Show}></i>
                <i className={state===true?'fas fa-times':""} onClick={hide}></i>
            </div>
            {
                state === true ?
                 
                    <ul className="tooglemenus">
                       <Link smooth="true" exact="true" to="#home" onClick={hide}> <li >Home</li></Link>
                       <Link smooth="true" exact="true" to="#about" onClick={hide}> <li >About</li></Link>
                        <Link smooth="true" exact="true" to="#projects" onClick={hide}> <li >Projects</li></Link>
                       <Link smooth="true" exact="true" to="#contact" onClick={hide}><li >Contact</li></Link> 
                    </ul>
                
                    : ""
                
            }
                       
          
        </div>
    )
}
