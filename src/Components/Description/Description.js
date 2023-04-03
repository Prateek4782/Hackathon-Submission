import React from 'react';
import { BsCalendar } from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai'
import{BiLinkExternal} from 'react-icons/bi'
export const Description = ({ description, hackathonName, formattedStartDate, formattedEndDate }) => {
  const startDate = new Date(formattedStartDate);
  const endDate = new Date(formattedEndDate);

  const getFormattedDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  return (
    <div className="container">
      <div className="desc-container">
        <p className="desc-hackathon-p">Description</p>
        <p>{description}</p>
      </div>
      <div className="side-container">
        <p className="desc-hackathon-p hack">Hackathon</p>
        <p className="desc-hackathon-p name">{hackathonName}</p>
        <div className="date-container">
          <BsCalendar className="date-icon" />
          <p className="desc-hackathon-p hack date">
            {getFormattedDate(startDate)} - {getFormattedDate(endDate)}
          </p>
        </div>
        <div className="desc-btn-container">
  <div className="desc-btn">
    <button><AiFillGithub/><span>Github links</span></button>
    <button><BiLinkExternal/><span>Other Links</span></button>
  </div>
</div>

      </div>
    </div>
  );
};
