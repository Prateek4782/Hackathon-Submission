import React, { useState } from 'react';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

export const Details = () => {
const { index } = useParams();
const location = useLocation();
const navigate = useNavigate();
const formDataList = JSON.parse(localStorage.getItem('formDataList')) || [];
const formData = location.state ? location.state.formData : formDataList[index];
const [isFavorited, setIsFavorited] = useState(false);

const handleFavorite = () => {
  setIsFavorited(!isFavorited);
  const updatedFormDataList = [...formDataList];
  updatedFormDataList[index] = { ...formDataList[index], isFavorited: !isFavorited };
  localStorage.setItem('formDataList', JSON.stringify(updatedFormDataList));
};

const handleDelete = () => {
const confirmation = window.confirm("Are you sure you want to delete this card?");
if (confirmation) {
// Delete the card from localStorage
formDataList.splice(index, 1);
localStorage.setItem('formDataList', JSON.stringify(formDataList));
// Navigate to the home page
navigate('/');
}
};
  return (
    <>
      <div className="banner detail-banner">
        <div className="detail-page-bar">
          <img src={formData.coverImage} alt="" className="detailbar-img" />
          <h1>{formData.title}</h1>
          <div className="star-icon-container" onClick={handleFavorite}>
              {isFavorited ? <AiFillStar /> : <AiOutlineStar />}
            </div>
          <div className="delete-edit-btn">
            <Link to={{pathname: `/edit/${index}`, state: {formData}}} className="bar-btn">Edit</Link>
            <button className="bar-btn" onClick={handleDelete}>Delete</button>
          </div>
        </div>
        <div className="p">{formData.summary}</div>
      </div>
      
      <div className="flex">
        <div className="desc-details">
          <h3>Description</h3>
          <p>{formData.description}</p>
        </div>
        <div className="date-name-link">
          <h5>{formData.eventType}</h5>
          <h2>{formData.eventName}</h2>
          <h6>{formData.eventDate}</h6>
          <button>Github Respository</button>
          <button>Other Link</button>
        </div>
      </div>
    </>
  );
};
