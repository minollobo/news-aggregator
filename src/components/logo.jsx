
import React from 'react';

const Logo = () => {
    return (
      <div className='flex gap-3'>
        <a href="/" className="flex items-center">
          <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg?color=indigo&shade=600" alt="Workflow" />
        </a>
        <h3 className='text-xl text-white'>NewsHub</h3>
      </div>
    );
};

export default Logo;