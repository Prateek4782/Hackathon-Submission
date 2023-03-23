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
    coverImage: formData?.coverImage ?? '',
  });
  

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Update the form data in localStorage
    const formDataList = JSON.parse(localStorage.getItem('formDataList')) || [];
    formDataList[index] = { ...formDataList[index], ...formValues };
    localStorage.setItem('formDataList', JSON.stringify(formDataList));

    // Navigate back to the details page
    navigate(`/Details/${index}`, { state: { formData: formDataList[index] } });
  };

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
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
        <input type="file" name="coverImage" value={formValues.coverImage} onChange={handleInputChange} />
      </label>
      <br />
      <button type="submit">Save</button>
    </form>
  );
};


