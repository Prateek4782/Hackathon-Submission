import { useLocation, useParams, useNavigate } from "react-router-dom";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { BsCalendar } from "react-icons/bs";
import { RxDividerVertical } from "react-icons/rx";
import React, { useState } from "react";

export const Details = () => {
  const { index } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const formDataList = JSON.parse(localStorage.getItem("formDataList")) || [];
  const formData = location.state
    ? location.state.formData
    : formDataList[index];
  const [isFavorited, setIsFavorited] = useState(formData.isFavorited || false);

  const handleNavigateToEdit = () => {
    const formDataToEdit = { ...formDataList[index] };
    // Set the "coverImage" property to an empty string to avoid the file name error
    formDataToEdit.coverImage = "";
    navigate(`/Edit/${index}`, {
      state: { formData: formDataToEdit, index: index },
    });
  };

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
    const updatedFormDataList = [...formDataList];
    updatedFormDataList[index] = {
      ...formDataList[index],
      isFavorited: !isFavorited,
    };
    localStorage.setItem("formDataList", JSON.stringify(updatedFormDataList));
  };

  const handleDelete = () => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this card?"
    );
    if (confirmation) {
      // Delete the card from localStorage
      formDataList.splice(index, 1);
      localStorage.setItem("formDataList", JSON.stringify(formDataList));
      // Navigate to the home page
      navigate("/");
    }
  };

  const hackathonStartDate = new Date(formData.hackathonStartDate);
  const formattedStartDate =
    hackathonStartDate.getDate() +
    " " +
    hackathonStartDate.toLocaleString("default", { month: "long" });

  return (
    <>
      <div className="banner detail-banner">
        <div className="detail-page-bar">
          <img src={formData.coverImage} alt="" className="detailbar-img" />
          <h1>{formData.title}</h1>
          <div className="delete-edit-btn">
            <button className="bar-btn" onClick={handleNavigateToEdit}>
              <MdModeEdit /> Edit
            </button>
            <button className="bar-btn " onClick={handleDelete}>
              <MdDelete /> Delete
            </button>
          </div>
        </div>
        <div className="p">{formData.summary}</div>

        <div className="star-icon-container " onClick={handleFavorite}>
          {isFavorited ? <AiFillStar /> : <AiOutlineStar />}{" "}
          <RxDividerVertical/>
          <h6 className="detail-bar-date">
            <BsCalendar />
            {formattedStartDate}
          </h6>
        </div>
      </div>

      <div className="flex">
        <div className="desc-details">
          <h3>Description</h3>
          <p>{formData.description}</p>
        </div>
        <div className="date-name-link">
          <h5>{formData.eventType}</h5>
          <h2 className="link-btn-date">{formData.eventName}</h2>
          <button className="link-btn">Github Respository</button>
          <button className="link-btn-2">Other Link</button>
        </div>
      </div>
    </>
  );
};
