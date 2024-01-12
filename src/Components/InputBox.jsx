import React from 'react';
import './InputBox.css';
const InputBox = ({ cityName, updateCityName, onSubmit }) => {
  return (
    <div className="col-12 col-md-6 offset-md-3">
      <div className="searchBox1">
        <input className="searchInput1" type="text" name="searchInput" placeholder="Search" value={cityName} onChange={(e) => updateCityName(e.target.value)}/>
        <button className="searchButton1" onClick={onSubmit}>
          <i>search</i>
        </button>
      </div>
    </div>
  );
};

export default InputBox;
 