
import React from "react";
import { Link, NavLink } from "react-router-dom";
import {  Menu } from 'lucide-react';
import {motion} from "framer-motion"

const Navbarmenu = [
  {
    id:1,
    title: "Home",
    link:"/"
  },
  {
    id:2,
    title: "Videocall",
    link:"/video-call"
  },
  {
    id:3,
    title: "Ai-help",
    link:"/Ai-helpdesk"
  },
  {
    id:4,
    title: "Contact",
    link:"/contact"
  },
  {
    id:5,
    title: "Services",
    link:"/services"
  },
]

function Navbar(){

  return (

    <>
   <nav className="sticky top-0 z-25 bg-white" >

    <motion.div
    initial={{opacity:0,y:-50}}
    animate={{opacity:1,y:0}}
     className="container py-5 flex justify-around items-center">
      {/* logo  */}
      <div>
        <h1 className="font-bold text-2xl">JoDo</h1>
      </div>
      {/* menu */}
      <div className="hidden lg:block">
        <ul className="flex items-center gap-3">
          {Navbarmenu.map((item)=>(
            <li key={item.id}>
             <NavLink to={item.link} className="inline-block py-2 px-3 hover:text-green-700 relative group">
  {item.title}
  <div style={{active:"bg-green-500"}} className="hidden group-hover:block w-3 h-1 bg-green-500 rounded-full absolute left-1/2  -translate-x-1/2 mt-1"></div>
</NavLink>
            </li>
          ))}
          <button className="primary-btn">Sign In</button>
        </ul>
      </div>

      {/* hambruger  */}

      <div className="lg:hidden">
<Menu className="text-4xl"/>

      </div>

    </motion.div>
   </nav>




    </>
  )
}

export default Navbar