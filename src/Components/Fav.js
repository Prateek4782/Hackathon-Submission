import React from 'react';

export const Fav = () => {
  const formDataList = JSON.parse(localStorage.getItem('formDataList')) || [];

  return (
    <div className='card-container'>
      {formDataList.filter(data => data.isFavorited).map((data, index) => (
        <div key={index} >
          <div className="Cards">
  <div className="card-flex">
          <img src={data.coverImage} className="Card-img" alt="" />
          <h2>{data.title}</h2>
          </div>
          
        
           
          <p>{data.summary}</p>
          {/* render more details about the data here */}
        </div>
        </div>
      ))}
    </div>
    
  );
};


