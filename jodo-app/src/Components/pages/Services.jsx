import React from "react"
import { Slide } from "react-awesome-reveal";
import Ai from "../../assets/Ai.jpg"
import doc from "../../assets/documents.jpg"
import sms from "../../assets/massenger.avif"

function Services(){

    return (

        <>

<Slide direction="left">
    <div className="flex flex-col justify-center items-center">

    <img className="rounded-2xl" src={Ai} alt="" />
    <img src={doc} alt="" />
    <img src={sms} alt="" />

  <div className="p-4 bg-white shadow-lg rounded-xl">
    <h3 className="text-xl font-semibold">Our Services -</h3>
    <p>Modern and responsive Services</p>
  </div>
    </div>
</Slide>

        </>
    )
}

export default Services