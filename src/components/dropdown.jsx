import React, {useContext, useState} from 'react';
import ThemeContext from '../themeContext';


export const CheckBoxComponent = ({label, name, checkOptions}) => {

  const [isOpen, setIsOpen] = useState(false);

    const {handleCheckboxChange, checkInputs} = useContext(ThemeContext);
    return (
    <div className='my-3'>
        <div onClick={() => setIsOpen(!isOpen)} className='flex justify-between items-center cursor-pointer'>
            <h3 className="block mb-2 text-md font-medium capitalize text-gray-300">{label}</h3>
            <svg
                className={`w-6 h-6 transform text-gray-300 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                stroke="currentColor"
            >
                <path d="M6 9l6 6 6-6"></path>
            </svg>
        </div>
        { isOpen &&
            <ul className="text-sm font-medium border rounded-lg bg-gray-700 border-gray-600 text-white">
                    { checkOptions.map((checkValue) => {
                        return checkValue && (
                            <li key={checkValue} className="w-full border-b rounded-t-lg border-gray-600">
                                <div className="flex items-center ps-3">
                                    <input id={checkValue} value={checkValue} checked={checkInputs[name].includes(checkValue)} type="checkbox" onChange={(e) => handleCheckboxChange(e, name)} className="cursor-pointer w-4 h-4 rounded focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500" />
                                    <label for={checkValue} className="w-full py-3 ms-2 text-sm font-medium text-gray-300">{checkValue}</label>
                                </div>
                            </li>
                        )
                    })}
            </ul>
        }
    </div>

    )
};

    export const SelectComponent = ({ label, options }) => {   

        const {handleSelectedInput, selectedInput} = useContext(ThemeContext)

        options = options.filter(option => option !== '[Removed]' || option !== '')

        return options && (
            <div className='my-3'>
                <label htmlFor="selectOption" className="block mb-2 capitalize text-md font-medium text-gray-300">
                    {label}
                </label>
                <select id="selectOption" value={selectedInput[label]} onChange={(e) => handleSelectedInput(e, label)} className="bg-gray-700 border cursor-pointer border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    { label === 'source' && <option value="All" defaultValue>All</option>}
                    {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                    ))}
                </select>
            </div>
        );
    };




