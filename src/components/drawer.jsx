import React, {useContext} from 'react';
import ThemeContext from '../themeContext';
import { ArticleFilter, PersonalFeedFilter } from './filters';

export const ShowDrawerButton = ({ label }) => {

  const { toggleDrawer : onClose} = useContext(ThemeContext);
  return (
    <div className="text-center">
      <button
        className="text-white flex gap-2 items-center h-11 text-center justify-start border-[0.5px] focus:border-0 bg-gray-mute/10 hover:bg-gray-mute focus:ring-1 focus:ring-blue-500 font-medium rounded-lg text-sm w-10 sm:w-auto px-2 py:1 sm:px-5 sm:py-2.5"
        type="button"
        onClick={onClose}
      >
        <img src='/filter.svg' className="w-full h-4" alt='filter' />
        <span className='hidden sm:block'>{label}</span>
      </button>
    </div>
  )
};

export const Drawer = ({showSelect}) => {

  const {
    isDrawerVisible: isVisible,
    toggleDrawer: onClose,
  } = useContext(ThemeContext);

return (
  <div
    id="drawer-navigation"
    className={`fixed h-screen overflow-y-auto transition-transform duration-500 ease-out ${
      isVisible ? 'w-full p-4 translate-x-0 ' : 'w-0 p-0 -translate-x-full'
    } sm:static max-w-80 sm:max-w-72 rounded-lg bg-gray-mute z-50 sm:z-auto`}
    tabIndex="-1"
    aria-labelledby="drawer-navigation-label"
  >

    <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-300">
      Customise
    </h5>
    <button
      type="button"
      onClick={onClose}
      aria-controls="drawer-navigation"
      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center"
    >
      <svg
        className="w-3 h-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
      <span className="sr-only">Close menu</span>
    </button>
    <div className="py-4 overflow-y-auto">
      { showSelect ?  <ArticleFilter /> : <PersonalFeedFilter /> }
    </div>
  </div>
)

};