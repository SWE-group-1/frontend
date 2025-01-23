import React from 'react';
import { useState } from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';

function Progress() {

    const [progress, setProgress] = useState(50);

    const tasks = [
        { date: 'Jan 1, 2025', task: 'Basic data-structure and algorithm' },
        { date: 'Jan 2, 2025', task: 'Basic data-structure and algorithm' },
        { date: 'Jan 3, 2025', task: 'Basic data-structure and algorithm' },
        { date: 'Jan 4, 2025', task: 'Software Engineering' },
        { date: 'Jan 4, 2025', task: 'Machine Learning' },
        { date: 'Jan 4, 2025', task: 'Operating Systems' },
    ];
    
  return (
    <div>
        <Navbar />
        <Sidebar />
    <div className=" ml-72">
        <h1 className='m-8 mt-6'>Completion Status</h1>
    <div className="bg-custom-pink m-8 p-4 w-fit rounded-3xl flex ">
    <div className="flex flex-col p-4 px-8 justify-center border-r-2 border-r-gray-400 items-center">
        <img src='/Assets/Images/Icons-drawer.png' />
        <span>3/7 courses</span>
    </div>
    <div className="flex flex-col p-4 px-8 justify-center border-r-2 border-r-gray-400 items-center">
        <img src='/Assets/Images/units.png'/>
        <span>30/70 Units</span>
    </div>
    <div className="flex flex-col p-4 px-8  justify-center items-center">
        <img src='/Assets/Images/learning.png'/>
        <span>2 hours learning</span>
    </div>
        </div>
        <div className="flex m-8 mt-4 w-1/3 justify-center items-center">
        <span className="text-gray-600 text-center mr-2 mt-1">Progress</span>
        <div className="flex-1 bg-gray-200 rounded-full h-2">
        <div
            className="bg-custom-yellow rounded-l-full h-4"
            style={{ width: `${progress}%` }} 
        ></div>
        </div>
        <span className="ml-2">{progress}%</span>
    </div>
    <div className="bg-custom-pink  w-full h-full">
        

        <div className="divide-y divide-gray-400">
            <div className="flex">
            <div className="text-gray-600 pr-20  ml-8 pt-8 w-28">Date</div>
            <div className="text-gray-600 border-l-2 pl-2 border-l-gray-400 pt-8">Completed</div>
            </div>

            {tasks.map((task) => (
            <div key={task.date} className="flex gap-4">
                <div className='ml-8 py-7 w-24'>{task.date}</div>
                <div className='border-l-2 pl-2 flex items-center border-l-gray-400'>{task.task}</div>
            </div>
            ))}
        </div>
    </div>
        </div>
    </div>
    );
}

export default Progress;