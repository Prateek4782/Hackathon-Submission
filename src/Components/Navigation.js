import React from 'react'
import {Link} from 'react-router-dom'
export const Navigation = () => {
  return (
    <>
    <div className="bar">
    <div className="text-navigation">
        <Link to={'/'}><h5 className={'/'? "h5": ""}>All Submissions</h5></Link>
        <h5>Favourite Submissions</h5>
    </div>
    <div className="searchbar">
<input type="search" placeholder='Search' />
<input type="search" placeholder='Sort' />

    </div>
    </div>
    
    </>
  )
}
