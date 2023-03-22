import React from 'react'
import {Link} from 'react-router-dom'
export const Navigation = () => {
  return (
    <>
    <div className="bar">
    <div className="text-navigation">
        <Link to={'/'}><h5 className='Link'>All Submissions</h5></Link>
       <Link to={'/Fav'} className='Link'> <h5>Favourite Submissions</h5></Link>
    </div>
   
    </div>
    
    </>
  )
}
