
import React, { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import './index.css'
import Videocall from "./Components/pages/Videocall"
import Aihelp from "./Components/pages/Aihelp"
import Home from "./Components/pages/Home"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Calling from "./Components/pages/Calling"

import AOS from 'aos';
import 'aos/dist/aos.css';

import Services from "./Components/pages/Services"
import Contact from "./Components/pages/Contact"


function App() {

  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true,   
    });
  }, []);

  return (
    <>
       


<Navbar/>
     <main className="overflow-x-hidden bg-white text-dark">
      <Routes>

        <Route path="/" element={<Home />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/services" element={<Services />} />

         <Route path="/video-call" element={<Videocall />} />

        <Route path="/Ai-helpdesk" element={<Aihelp />} />

        <Route path="/calling/:name/:roomid" element={<Calling />} /> 
      </Routes>

<Footer/> 
     </main>   


    </>
  )
}

export default App
