import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import conf2 from "../src/assets/conf2.jpg"


const Room = () => {
  const {roomID}=useParams();
  console.log(roomID);
  const meeting = async(element) => {
    const appID = 786276998;
    const serverSecret="1fbec352c2add499f560d705553bdee9";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomID,Date.now().toString(),"Aditya Rathore");
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container:element,
      scenario:{
        mode: ZegoUIKitPrebuilt.GroupCall,
      }
    })

  };

  return (
    <div style={{height:"100vh",backgroundImage:"url("+conf2+")",backgroundSize:"cover"}}>
    <div ref={meeting} style={{width:"100vw",height:"100vh" }}></div>
    </div>
  )
}

export default Room