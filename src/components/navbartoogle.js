import React, { useState } from 'react'
import { Link } from "react-router-dom"



export default function Navbartoogle(prop) {
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
                <i className="fas fa-list-ul" onClick={Show}></i>

            </div>
            {
                state === true ?
                 
                    <div className="tooglemenus">
                        
                        <i className="fas fa-times" onClick={hide}></i>
                        <Link to={prop.to}>Home</Link>
                        <Link to={prop.to}>About</Link>
                        <Link to={prop.to}>Projects</Link>
                        <Link to={prop.to}>Contact</Link>
                    </div>
                    : ""
            }
        </div>
    )
}
