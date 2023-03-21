import React from 'react'

export const Navigation = () => {
  return (
    <>
    <div className="bar">
    <div className="text-navigation">
        <h5>All Submissions</h5>
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
