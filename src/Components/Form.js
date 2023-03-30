import React, { useState } from "react";

export const Form = () => {
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    description: "",
    coverImage: null,
    hackathonName: "",
    hackathonStartDate: "",
    hackathonEndDate: "",
    githubLink: "",
    otherLinks: "",
    date: new Date().toISOString().substr(0, 10)
  });
  

 const handleChange = (e) => {
  const { name, value } = e.target;

  if (name === "coverImage") {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (event) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: event.target.result,
      }));
    };
  } else {
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }
};

const handleSubmit = (e) => {
  e.preventDefault();
  const formDataList = JSON.parse(localStorage.getItem("formDataList")) || [];

  // Validate form input
  const errors = {};
  if (!formData.title) {
    errors.title = "Title is required";
  }
  if (!formData.summary) {
    errors.summary = "Summary is required";
  }
  if (!formData.description) {
    errors.description = "Description is required";
  }
  if (!formData.coverImage) {
    errors.coverImage = "Cover image is required";
  }
  if (!formData.hackathonName) {
    errors.hackathonName = "Hackathon name is required";
  }

  // If there are validation errors, display them and prevent submission
  if (Object.keys(errors).length > 0) {
    window.alert(Object.values(errors).join("\n"));
    return;
  }

  // Display a confirmation dialog before submitting the form
  const isConfirmed = window.confirm("Are you sure you want to submit the form?");
  if (!isConfirmed) {
    return;
  }

  formDataList.push({ ...formData, date: new Date().toISOString().substr(0, 10) });
  localStorage.setItem("formDataList", JSON.stringify(formDataList));

  // Display an alert before navigating to the home page
  window.alert("Thank you for your submission!");

  // Navigate to the home page
  window.location.href = "/";
};

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>New Hackathon Submission</h1>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="summary">Summary:</label>
        <textarea
          id="summary"
          name="summary"
          value={formData.summary}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="coverImage">Cover Image : Minimum resolution: 360px  X 360px</label>
        <input
          type="file"
          id="coverImage"
          name="coverImage"
          accept="image/*"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="hackathonName">Hackathon Name:</label>
        <input
          type="text"
          id="hackathonName"
          name="hackathonName"
          value={formData.hackathonName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="hackathonStartDate">Hackathon Start Date:</label>
<input
       type="date"
       id="hackathonStartDate"
       name="hackathonStartDate"
       value={formData.hackathonStartDate}
       onChange={handleChange}
     />
</div>
<div>
<label htmlFor="hackathonEndDate">Hackathon End Date:</label>
<input
       type="date"
       id="hackathonEndDate"
       name="hackathonEndDate"
       value={formData.hackathonEndDate}
       onChange={handleChange}
     />
</div>
<div>
<label htmlFor="githubLink">Github Repository Link:</label>
<input
       type="text"
       id="githubLink"
       name="githubLink"
       value={formData.githubLink}
       onChange={handleChange}
     />
</div>
<div>
<label htmlFor="otherLinks">Other Links:</label>
<input
       type="text"
       id="otherLinks"
       name="otherLinks"
       value={formData.otherLinks}
       onChange={handleChange}
     />
</div>
<button type="submit">Submit</button>
</form>
);
};

