import React, { useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

export const Details = () => {
  const { index } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const formDataList = JSON.parse(localStorage.getItem('formDataList')) || [];
  const formData = location.state ? location.state.formData : formDataList[index];
  const [isFavorited, setIsFavorited] = useState(false);

  const handleNavigateToEdit = () => {
    navigate(`/Edit/${index}`, { state: { formData: formDataList[index] } });
  };

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
            <button className="bar-btn" onClick={handleNavigateToEdit}>Edit</button>
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
          <h2 className='link-btn-date'>{formData.eventName}</h2>
          <h6>{formData.hackathonStartDate}</h6>
          <button className='link-btn'>Github Respository</button>
          <button  className='link-btn-2'>Other Link</button>
        </div>
      </div>
    </>
  );
};
