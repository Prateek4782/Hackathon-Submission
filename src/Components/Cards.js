import React from 'react';
import { Link } from 'react-router-dom';

export const Cards = () => {
  const formDataList = JSON.parse(localStorage.getItem('formDataList')) || [];

  return (
    <>
      <div className="card-container">
        {formDataList.map((formData, index) => (
   <Link to={{ pathname: `/Details/${index}`, state: { formData: formData } }} className="Link" key={`card-${index}`}>



            <div className="Cards">
              <div className="card-flex">
                <img src={formData.coverImage} alt="" className="Card-img" />
                <h2>{formData.title}</h2>
              </div>
              <p>{formData.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
