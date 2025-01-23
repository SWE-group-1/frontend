import React from 'react';
import logo from '../Assets/Images/logo.png'; 

function Navbar() {
  return (
    <nav className="bg-custom-pink p-2 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-20 h-20" />
        <span className="text-3xl font-serif text-blue-900 font-bold ml-2">Personalized Study Planner</span>
      </div>
      <div className="flex gap-4 items-center">
      <img src="/Assets/Images/bell.png" alt="Bell" className="w-4 h-6" />
        <img
          src="/Assets/Images/user.png" 
          alt="User Profile"
          className="rounded-full w-10 h-10 mr-2"
        />
        <span className="text-sm font-semibold">Sarah Ali Martins</span>
        <img
          src="/Assets/Images/Vector.png" 
          alt="User Profile"
          className="rounded-full  mr-2"
        />
          
      </div>
    </nav>
  );
}

export default Navbar;