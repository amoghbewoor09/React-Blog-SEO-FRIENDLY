import React, { createContext, useState } from 'react';

// Create a new context instance
const DateTimeContext = createContext();

// Define the DateTimeProvider component
export const DateTimeProvider = ({ children }) => {
  // Define state variables for lastUpdated values
  const [lastUpdated, setLastUpdated] = useState('2023-05-29 08:30:12');
  const [lastUpdatedB, setLastUpdatedB] = useState('2023-05-29 09:30:12');
  const [lastUpdatedC, setLastUpdatedC] = useState('2023-05-29 10:30:12');
  const [lastUpdatedD, setLastUpdatedD] = useState('2023-05-29 11:30:12');
  const [lastUpdatedE, setLastUpdatedE] = useState('2023-05-29 12:30:12');
  const [lastUpdatedF, setLastUpdatedF] = useState('2023-05-29 01:30:12');
  const [lastUpdatedG, setLastUpdatedG] = useState('2023-05-29 02:30:12');
  
  // Render the DateTimeContext.Provider component
  return (
    <DateTimeContext.Provider value={{ 
      lastUpdated, setLastUpdated,
      lastUpdatedB, setLastUpdatedB,
      lastUpdatedC, setLastUpdatedC,
      lastUpdatedD, setLastUpdatedD,
      lastUpdatedE, setLastUpdatedE,
      lastUpdatedF, setLastUpdatedF,
      lastUpdatedG, setLastUpdatedG,
    }}>
      {children}
    </DateTimeContext.Provider>
  );
};

// Export the DateTimeContext
export default DateTimeContext;
