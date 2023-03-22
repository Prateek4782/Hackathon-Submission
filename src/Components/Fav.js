import React from 'react';

export const Fav = () => {
  const formDataList = JSON.parse(localStorage.getItem('formDataList')) || [];

  return (
    <div>
      {formDataList.filter(data => data.isFavorited).map((data, index) => (
        <div key={index}>
            <img src={data.coverImage} alt="" />
          <h2>{data.title}</h2>
          <p>{data.summary}</p>
          {/* render more details about the data here */}
        </div>
      ))}
    </div>
  );
};


