import React from "react"

// style
 import "./components/app.scss"
// components
import Navbar from "./components/navbar.js"
import Hero from "./components/hero.js"
import About from "./components/about.js"
import Projects from "./components/projects.js"

const App=()=>{
    return (
        <>
           <Navbar/>
           <Hero/>
           <About/>
           <Projects/>
        </>
    )           
}
export default App