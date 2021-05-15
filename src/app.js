import React from "react"


// style
 import "./components/app.scss"
// components
import Navbar from "./components/navbar.js"
import Hero from "./components/hero.js"
import About from "./components/about.js"
import Projects from "./components/projects.js"
import Contact from "./components/contact.js"
import Footer from "./components/footer.js"

const App=()=>{
    return (
        <>
           <Navbar/>
           <Hero/>
           <Projects/>
           <About/>
           <Contact/>
           <Footer/>
        </>
    )           
}
export default App