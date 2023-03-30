import { useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';

export const Edit = () => {
  const { index } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData ?? {};

  // Set up state to track the form data
  const [formValues, setFormValues] = useState({
    title: formData?.title ?? '',
    description: formData?.description ?? '',
    coverImage: '',
    hackathonName: formData?.hackathonName ?? '',
    startDate: formData?.startDate ?? '',
    endDate: formData?.endDate ?? '',
    githubLink: formData?.githubLink ?? '',
    otherLinks: formData?.otherLinks ?? '',
  });

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Update the form data in localStorage
    const formDataList = JSON.parse(localStorage.getItem('formDataList')) || [];
    formDataList[index] = { ...formDataList[index], ...formValues };
    localStorage.setItem('formDataList', JSON.stringify(formDataList));
    const isConfirmed = window.confirm("Are you sure you want to submit form?");
    if (!isConfirmed) {
      return;
    }
  
    formDataList.push({ ...formData, date: new Date().toISOString().substr(0, 10) });
    localStorage.setItem("formDataList", JSON.stringify(formDataList));
  
    // Display an alert before navigating to the home page
    window.alert("Update Form Saved!");
    // Navigate back to the details page
    navigate(`/Details/${index}`, { state: { formData: formDataList[index] } });
  };

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name } = event.target;
  
    if (name === 'coverImage') {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setFormValues({ ...formValues, [name]: reader.result });
        };
      }
    } else {
      const { value } = event.target;
      setFormValues({ ...formValues, [name]: value });
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={formValues.title} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Description:
        <textarea name="description" value={formValues.description} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Cover Image:
        <input type="file" name="coverImage" onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Hackathon Name:
        <input type="text" name="hackathonName" value={formValues.hackathonName} onChange={handleInputChange} placeholder="Enter hackathon name" />
      </label>
      <br />
      <label>
        Start Date:
        <input type="date" name="startDate" value={formValues.startDate} onChange={handleInputChange} placeholder="Enter start date" />
      </label>
      <br />
      <label>
        End Date:
        <input type="date" name="endDate" value={formValues.endDate} onChange={handleInputChange} placeholder="Enter end date" />
      </label>
      <br />
      <label>
        GitHub Link:
        <input type="text" name="githubLink" value={formValues.githubLink} onChange={handleInputChange} placeholder="Enter GitHub link" />
      </label>
      <br />
      <label>
        Other Links:
        <input type="text" name="otherLinks" value={formValues.otherLinks} onChange={handleInputChange} placeholder="Enter other links" />
      </label>
      <br />
      <button type="submit">Save</button>
    </form>
  );
};
