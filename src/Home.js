import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import conf from "../src/assets/conf.jpg"
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const Home = () => {
    const[RoomCode,setRoomCode]=useState("");
    const navigate = useNavigate();

    const submitCode=(e)=>{
        e.preventDefault();
        const loc= "/room/"+RoomCode;
        navigate(loc);
    }

  return (
    < div className=''>
      {/*navbar*/}

            <Navbar/>
    
      {/*main*/}
    <div style={{height:"90vh",backgroundImage:'url('+conf+')',backgroundSize:'cover' }} >
      <div >
        <h1 className=' flex justify-center font-bold text-[70px] pt-14' style={{color:"skyblue"}}>Video Chat Room</h1>
        <p className=' flex justify-center text-[35px] pt-0 ' style={{color:"skyblue" }}>...zegocloud</p>
      </div >
        <form action="" onSubmit={submitCode}  className='flex flex-col items-center justify-center mt-10'>
        <div className='flex flex-col items-center justify-center'>
        <label htmlFor='' className='font-bold text-[45px] pt-10 ' style={{color:"white"}}>Enter The Room Code 
        </label>
        <input type="text" 
        placeholder='Enter room code' 
        value={RoomCode} 
        onChange={(e)=> setRoomCode(e.target.value)}
        className='text-[25px] bg-white place placeholder: py-2 w-[16rem] rounded-full pl-9 mt-4'/>
        </div>
        <button type='submit' className="text-[20px] bg-blue-500 rounded-[0.5rem] mt-3 py-1.5 px-4 font-bold " >Enter Room</button>
        </form>
    </div>

    <Footer />


    </div>
  )
}

export default Home

