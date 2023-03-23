import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Cards = () => {
  const formDataList = JSON.parse(localStorage.getItem('formDataList')) || [];
  const [searchValue, setSearchValue] = useState('');
  const [sortOrder, setSortOrder] = useState('newest'); // default sort order is by newest

  const filteredFormDataList = formDataList
    .filter(formData => formData.title.toLowerCase().includes(searchValue.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === 'oldest') {
        return new Date(a.date) - new Date(b.date);
      } else {
        return new Date(b.date) - new Date(a.date);
      }
    });

  const handleSearchInputChange = event => {
    setSearchValue(event.target.value);
  };

  const handleSortChange = event => {
    setSortOrder(event.target.value);
  };

  return (
    <>
      <div className="searchbar ">
        <input
          type="search"
          placeholder="Search by title"
          value={searchValue}
          onChange={handleSearchInputChange}
        />

        <select  value={sortOrder} onChange={handleSortChange} className='option'>
          <option value="newest">Newest</option>
          <option value="oldest" >Oldest</option>
        </select>
      </div>
      <div className="card-container">
        {filteredFormDataList.map((formData, index) => (
          <Link
            to={{
              pathname: `/Details/${index}`,
              state: { formData: formData },
            }}
            className="Link"
            key={`card-${index}`}
          >
            <div className="Cards">
              <div className="card-flex">
                <img src={formData.coverImage} alt="" className="Card-img" />
                <h2>{formData.title}</h2>
              </div>
              <p>{formData.summary}</p>
              <p>{formData.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
