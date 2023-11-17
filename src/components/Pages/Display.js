import React from 'react';
import { useSelector } from 'react-redux';
import './Styles/Display.css';

function Display1() {
  const form = useSelector((state) => state.form);

  return (
    <div className="f1">
      <h1>PROFILE</h1>
      <div className="f2">
        {form.map((item) => (
          <div key={item.id} className="display-item">
            <div className="profile-image">
              {item.image && <img src={URL.createObjectURL(item.image)} alt="Profile" />}
            </div>
            <div className="name">
              <p>{item.name}</p>
            </div>
            {/* Add other user data fields here */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Display1;
