import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  
  // State for dropdown
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h3 onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
        History <span>{isOpen ? '▲' : '▼'}</span>
      </h3>
      {isOpen && (
        <ul className="list">
          {transactions.map(transaction => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      )}
    </div>
  );
};
