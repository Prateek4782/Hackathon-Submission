import React from 'react';
import { BsCalendar } from "react-icons/bs";
export const Description = ({ description, hackathonName, formattedStartDate, formattedEndDate }) => {
  
  return (
    <div className="container">
      <div className="desc-container">
        <p className="desc-hackathon-p">Description</p>
        <p>
          {description}
        </p>
      </div>
      <div className="side-container">
        <p className="desc-hackathon-p hack">Hackathon</p>
        <p className='desc-hackathon-p name' >{hackathonName}</p>
        <p className='desc-hackathon-p hack date'><BsCalendar/>{formattedStartDate} - {formattedEndDate}</p>
        <button>Github links</button>
        <button>Other Links</button>
      </div>
    </div>
  );
};
