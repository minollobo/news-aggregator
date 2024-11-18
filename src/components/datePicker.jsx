import React, { useContext } from 'react';
import ThemeContext from '../themeContext';


const DateInput = () => {
  const { setArticleFilters } = useContext(ThemeContext)

  const handleDateChange = (e) => {
    const input = new Date(e.target.value);
    
    const formattedDate = input.toISOString().split('T')[0];
    setArticleFilters(prev => ({
      ...prev,
      date: formattedDate
    }));
  };

  return (
    <div className="my-3">
      <label htmlFor="date" className="block mb-2 text-md font-medium text-gray-300">Select Date</label>
      <input 
        type="date" 
        id="date" 
        onChange={handleDateChange} 
        className="bg-gray-700 border cursor-pointer rounded-lg w-full border-gray-300 text-gray-300"
      />
    </div>
  );
};

export default DateInput;
