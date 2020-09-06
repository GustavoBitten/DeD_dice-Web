import React, { useState, useEffect } from 'react';
import api from '../../services/api';

const Dashboard: React.FC = () => {
  const [numbers, setNumbers] = useState([]);
  async function getResultDice(): Promise<void | undefined> {
    const result = await (await api.get('/')).data;
    setNumbers(result);
  }

  useEffect(() => {
    getResultDice();
  }, []);

  return (
    <>
      <h1>{numbers[1]}</h1>
      <h1>Dashboard</h1>
    </>
  );
};

export default Dashboard;
