
import React from "react"
import { ArrowBigRightDash, icons, Scale, Video } from 'lucide-react';
import hero from "../../assets/heroimg.jpg"
import {delay, motion} from "framer-motion"

import { Skull } from 'lucide-react';
import { BookText } from 'lucide-react';
import { MessageSquareCode } from 'lucide-react';
import { Info } from 'lucide-react';

import community from "../../assets/community.jpg"
import cardvideo from "../../assets/cardVideo.jpg"
import { useNavigate } from "react-router-dom";
import Ai from "../../assets/Ai.jpg"
import doc from "../../assets/documents.jpg"
import sms from "../../assets/massenger.avif"
import con from "../../assets/contact.avif"


// motion fade for hero 
export const Fade = (delay)=>{
  return {
    initial:{
      opacity:0,
      y:50,
    },
    animate:{
      opacity:1,
      y:0,
      transition:{
        type:"spring",
        stiffness: 100,
        duration:0.5,
        delay:delay,
        ease:"easeInout"
      }
    }
  }
}

// card data 
const Carddata=[
  {
    id:1,
    title:"Video Conference",
    link:"/video-call",
    img:cardvideo,
    delay:0.4
  },
  {
    id:2,
    title:"Chat With AI",
    link:"/Ai-helpdesk",
    img:Ai,
    delay:0.5
  },
  {
    id:3,
    title:"Upload Documents",
    link:"#",
    img:doc,
    delay:0.6
  },
  {
    id:4,
    title:"Massenger",
    link:"#",
    img:sms,
    delay:0.7
  },
  {
    id:5,
    title:"Contact Us",
    link:"/contact",
    img:con,
    delay:0.8
  },
  
]

// card motion 

const Cardslide = (delay)=>{
  return {
    initial:{
      opacity:0,
      x:50,
    },
    animate:{
      opacity:1,
      x:0,
      transition:{
        duration:0.3,
        delay:delay,
        ease:"easeInOut",
      },
    },
  }
}

// community 
const bgimg= {
  backgroundImage: `url(${community})`,
  backgroundRepeat: "no-repeat",
  backgroundSize:"cover",
  backgroundPosition:"center",
}

function Home(){
  
  const navigate = useNavigate();
  return (
    
    <>
    <div className="container flex flex-col items-center justify-center">


    {/* hero  */}
<section className="bg-yellow-50  overflow-hidden relative">
  <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[350px]">

{/* info */}
<div className="flex flex-col justify-center px-2 md:px-24 py-14  md:py-0  relative z-20">
  <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">

  <motion.h1
  variants={Fade(0.6)}
  initial="initial"
  animate="animate"
  viewport={{once:true}}
  data-aos="fade-up"

  className=" text-3xl lg:text-4xl font-bold !leading-snug">
  "Video Calling That Feels Real — <span className="text-green-700"> for Smart Transcripts, Face Focus</span> & More."
  </motion.h1>
  <motion.div variants={Fade(0.8)}
  initial="initial"
  animate="animate"
  viewport={{once:true}}
  data-aos="fade-up" className="flex justify-center md:justify-start">
    <button onClick={() => navigate("/video-call")}   className="cursor-pointer primary-btn flex items-center gap-1 group">Meet Now
<ArrowBigRightDash className="text-xl group-hover:translate-x-5 group-hover:-rotate-2 duration-300"/>
</button >
  </motion.div>
  </div>
</div>

{/* front img  */}

<div className="flex justify-center items-center">

<motion.img 
  initial={{x:50,opacity:0}}
  animate={{x:0,opacity:1}}
  transition={{duration:0.6,delay:0.4,ease:"easeInOut"}} viewport={{once:true}} src={hero} alt="" className="w-[400px] xl:w-[400px]  z-10 drop-shadow"/>

</div>

  </div>


</section>

{/* Cards  */}

<section className="bg-white">
<div className="container pb-14 pt-10">
  <h1 className="text-3xl font-bold text-left pl-12  pb-10">
    Provided For You
  </h1>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 ">
  {
    Carddata.map((data)=>(
      <motion.div onClick={()=>navigate(data.link)}
      variants={Cardslide(data.delay)} initial="initial" whileInView={"animate"} viewport={{once:false}}  className="bg-[#fdfae4] rounded-2xl flex flex-col gap-5 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl cursor-pointer ">
<img src={data.img} className=" mb-4 rounded hover:shadow-2xl"/>
<h1 className="text-lg font-semibold text-center px-3 ">{data.title}</h1>


        </motion.div>
    
    ))
  }
</div>

</div>

</section>
    

    {/* comunity section  */}

    <section  className="bg-yellow-50 w-full ">
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}}  style={bgimg}   className=" container py-24 md:py-28 filter blur-[1px] rounded-2xl shadow-[10px_0_20px_rgba(0,0,0,0.2)]">
<motion.div initial={{opacity:0, scale:0.5}} whileInView={{opacity:1 ,scale:1}} transition={{duration:0.6,ease:"easeInOut"}} className="flex flex-col justify-center">
  <div className="text-center space-y-4 lg:max-w-[400px] mx-auto">
<h1 className="sm:text-5xl text-3xl font-bold !leading-snug">750K+ People are using </h1>
<p className="text-lg"> consectetur adipisicing elit. Magnam, minus rerum a iusto deleniti facilis odio non et nemo blanditiis in veniam iste quam nisi soluta ex incidunt at? Beatae!</p>
  </div>

</motion.div>

      </motion.div>



    </section>
         </div>
    </>
  )
}

export default Home

