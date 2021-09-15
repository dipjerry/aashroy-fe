import React from 'react';
import AddNgo from '../../ngo/pages/AddNgo';
const Profile = () => {
  return (
    <React.Fragment>
      <h1>Add Ngo</h1>
      <AddNgo
        type = "text"
        placeholder = "Your status"
        control = "input"
      />
    </React.Fragment>
  );
};

export default Profile;
