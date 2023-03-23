import React from 'react'
import {Link, useLocation} from 'react-router-dom'

export const Navigation = () => {
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';
  
  return (
    <>
      <div className="bar">
        <div className="text-navigation">
          <Link to={'/'}>
            <h5 className={isHomePage ? "border-bot" : ""}>All Submissions</h5>
          </Link>
          <Link to={'/Fav'}>
            <h5 className={!isHomePage ? "border-bot" : ""}>Favourite Submissions</h5>
          </Link>
        </div>
      </div>
    </>
  )
}
