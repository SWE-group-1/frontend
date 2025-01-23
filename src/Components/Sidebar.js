import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; 

function Sidebar() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed top-26 left-0 z-50 h-screen w-72 bg-custom-yellow ">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Navigation</h1>
        <ul className="space-y-4">
      <li>
        <Link
          to="/"
          className={`flex items-center border-b pb-2 text-lg font-serif ${
            isActive('/') ? 'text-black border-r-8 border-r-blue-950' : 'text-white'
          }`}
        >
          <img src="/Assets/Images/home.png" alt="Home" className="w-6 h-6 mr-8" />
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/course-management"
          className={`flex items-center text-lg font-serif ${
            isActive('/course-management') ? 'text-black border-r-4 border-blue-500' : 'text-white'
          }`}
        >
          <img src="/Assets/Images/course.png" alt="Course Management" className="w-6 h-6 mr-8" />
          Course Management
        </Link>
      </li>
      <li>
        <Link
          to="/scheduling"
          className={`flex items-center text-lg font-serif ${
            isActive('/scheduling') ? 'text-black border-r-4 border-blue-500' : 'text-white'
          }`}
        >
          <img src="/Assets/Images/course.png" alt="Schedule" className="w-6 h-6 mr-8" />
          Scheduling
        </Link>
      </li>
      <li>
        <Link
          to="/progress"
          className={`flex items-center text-lg font-serif ${
            isActive('/progress') ? 'text-black border-r-4 border-blue-500' : 'text-white'
          }`}
        >
          <img src="/Assets/Images/chart.png" alt="Progress" className="w-6 h-6 mr-8" />
          Progress
        </Link>
      </li>
      <li>
        <Link
          to="/help"
          className={`flex items-center text-lg font-serif ${
            isActive('/help') ? 'text-black border-r-4 border-blue-500' : 'text-white'
          }`}
        >
          <img src="/Assets/Images/help.png" alt="Help" className="w-6 h-6 mr-8" />
          Get Help
        </Link>
      </li>
      <li>
        <Link
          to="/sign-out"
          className={`flex items-center text-lg font-serif ${
            isActive('/sign-out') ? 'text-black border-r-4 border-blue-500' : 'text-white'
          }`}
        >
          <img src="/Assets/Images/sign-out.png" alt="Sign Out" className="w-6 h-6 mr-8" />
          Sign Out
        </Link>
      </li>
    </ul>
      </div>
    </div>
  );
}

export default Sidebar;