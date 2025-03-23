import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { v4 as uuid } from "uuid";


function Videocall() {
  const [roomid, setroomid] = useState("");
  const [username , setname]= useState("")
      
  
  const navigate = useNavigate();

  function handalesubmit(e) {
    e.preventDefault();
    navigate(`/calling/${username}/${roomid}`);
  }

  function genrateroomid(e){
    e.preventDefault();
    let id = uuid()
    setroomid(id)
    toast.success("Room id generated successfully")
        }

  return (


    
    <div className="relative flex items-center justify-center min-h-screen bg-gray-900">
      {/* Background Image using ::after */}
      <div className="absolute inset-0 bg-cover bg-center after:content-[''] after:absolute after:inset-0 after:bg-black/50 after:z-0" style={{ backgroundImage: "url('https://t3.ftcdn.net/jpg/03/40/09/54/240_F_340095428_XYASPffYITkvIIDFjYmNU2uClvvdAYgX.jpg')" }}></div>

      <form
        onSubmit={handalesubmit}
        className="relative z-10 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Join a Room</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Generate Room</label>
          <input 
        value={roomid}
        onChange={(e)=> setroomid(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            required
            placeholder="Generated room"
          />
          

<p className="mt-3 text-black">
  Generated ID {" "}
  <span 
    className="text-green-400 font-medium cursor-pointer hover:text-green-500 transition" 
    onClick={genrateroomid}
  >
    New Room-ID
  </span>
</p>

        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Username</label>
          <input onChange={(e)=>setname(e.target.value)}
            type="text"
            
            placeholder="Enter your username"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Join
        </button>
      </form>
      <ToastContainer/>
    </div>

  );
}

export default Videocall;
