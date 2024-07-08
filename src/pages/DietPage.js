import React, { useState } from 'react';
import DietForm from '../components/DietForm';

const DietPage = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  return (
    <div>
      <h1>Diet Plan</h1>
      <DietForm token={token} />
    </div>
  );
};

export default DietPage;
