import React, { useState } from 'react'
import { HashLink as Link } from "react-router-hash-link"




export default function Navbartoogle() {
    const [state, setState] = useState(false)
    const [tooglemenu, setToogleMenu] = useState(false)

    const Show = () => {
        state===false?setState(true):setState(false)
    }
    const hide = () => {
        setState(false)
    }
    


    window.addEventListener("scroll",()=>{
        if(window.scrollY >= 80){
           setToogleMenu(true)
        }else{
            setToogleMenu(false)
        }
    })

    return (
        <div>
            <div className="tooglemenu">
                <i className={state==false?'fas fa-bars':"fas fa-times"} onClick={Show}></i>
            </div>
            {
                state === true ?
                 
                    <ul className={tooglemenu===true? " tooglemenus tooglemenu_up":"tooglemenus"}>
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
