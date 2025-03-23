import React from "react"
import { useNavigate } from "react-router-dom";
import { ArrowLeftToLine } from 'lucide-react';
import { ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"
import { useParams } from "react-router-dom"
function Calling(){
const {roomid,name} = useParams()
const navigate = useNavigate();



const myMeeting = async (ele)=>{
    const appID = 309907152;
    const serverSecret = "160b0aa3b9886a460ee7c0cc13896351"
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomid,Date.now().toString(),name)
    const zp = ZegoUIKitPrebuilt.create(kitToken)
    zp.joinRoom({
        container:ele,
        scenario:{
            mode:ZegoUIKitPrebuilt.VideoConference,

        }
    })
}

    return (

        <>
 <button 
            onClick={() => navigate(-1)} 
            className="px-8 py-5 w-xl   text-dark rounded"
        >
            <ArrowLeftToLine className="w-8 h-8 cursor-pointer" />
        </button>

        <div ref={myMeeting}/>
        </>
    )
}

export default Calling