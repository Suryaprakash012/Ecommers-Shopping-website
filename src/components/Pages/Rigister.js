import React, { useState } from 'react';
import './Styles/Form.css';
import { useDispatch } from 'react-redux';
import { formAdd } from '../reducer/Formreducers';
import { nanoid } from 'nanoid';

function Forms() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('male');

  const handleChangename = (e) => {
    setName(e.target.value);
  };

  const handleChangeusername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangepassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangedateOfBirth = (e) => {
    setDateOfBirth(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };



  const handleSave = () => {
    if (name && username && password && dateOfBirth ) {
      const newAdd = {
        id: nanoid(),
        name,
        username,
        password,
        dateOfBirth,
        gender,
      };
      dispatch(formAdd(newAdd));
      setName('');
      setUsername('');
      setPassword('');
      setDateOfBirth('');
      setGender('female');
    }
  };

  return (
    <div className="ful">
      <div className="container">
        <h1>Registration Form</h1>
        <form>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChangename}
              required
            />
          </div>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChangeusername}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChangepassword}
              required
            />
          </div>
          <div>
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dateOfBirth"
              value={dateOfBirth}
              onChange={handleChangedateOfBirth}
              required
            />
          </div>
          <div>
            <label>Gender:</label>
            <select name="gender" value={gender} onChange={handleGenderChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
       
          <button type="button" onClick={handleSave}>
            Submit
          </button>
        </form>
      </div>
      {/* Other UI elements */}
    </div>
  );
}

export default Forms;
