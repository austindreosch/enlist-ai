import axios from 'axios';
import React from 'react';

const Index = () => {
  const handleProfileSubmit = async () => {
    try {
      const response = await axios.post('/api/profile');
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Welcome to Next.js</h1>
      <button onClick={handleProfileSubmit}>Submit Profile</button>
    </div>
  );
};

export default Index;
