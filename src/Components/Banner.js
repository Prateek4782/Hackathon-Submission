import React from 'react'
import Bulb from '../Assets/bulb.png'
import wave from '../Assets/waves.png'
import { Link } from 'react-router-dom'
export const Banner = () => {


  return (
        <>
    <div className="banner">
 <div className="text-banner">
        <h1 className='banner-h-tag'>Hackathon Submission</h1>
        <p className='banner-p-tag'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum voluptatibus in culpa porro est illo tempore natus facere. Deleniti quibusdam accusantium commodi magni possimus unde voluptates autem dolorem pariatur.</p>
      <Link to='/form'> <button className='banner-button' >Upload Submission</button> </Link> 

    </div>
    <banner className="img">
        <img src={Bulb} alt="bulb " className='bulb' />
        <img src={wave} alt="bulb" className='waves' />
    </banner>
    </div>
    </>
  )
}
