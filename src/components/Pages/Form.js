import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/Form.css'
function Form() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    dateOfBirth: '',
    gender: 'male', // Set a default gender value
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(
      `/display?name=${formData.name}&username=${formData.username}&password=${formData.password}&dateOfBirth=${formData.dateOfBirth}&gender=${formData.gender}`
    );
  };

  return (
    <div className="ful">
    <div className="container">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div >
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default Form;




