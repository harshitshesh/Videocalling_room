import React from "react"
import { Slide } from "react-awesome-reveal";
import con from "../../assets/contact.avif"

function Contact(){

    return (

        <>

<Slide direction="left">
    <div className="flex flex-col justify-center items-center">

    <img src={con} alt="" />
  <div className="p-4 bg-white shadow-lg rounded-xl">
    <h3 className="text-xl font-semibold">Contact us -</h3>
    <p> For better support</p>
  </div>
    </div>
</Slide>

        </>
    )
}

export default Contact