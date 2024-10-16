import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  
  // State for dropdown
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h4 onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
        Your Balance <span>{isOpen ? '▲' : '▼'}</span>
      </h4>
      {isOpen && <h1>${total}</h1>}
    </div>
  );
};
