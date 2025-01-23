import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import { useNavigate } from "react-router-dom";
import ScheduleCalendar from '../Components/ScheduleCalendar';

const Scheduling = () => {
  const [schedules, setSchedules] = useState([
    { name: 'Machine Learning', time: '9:00 a.m.' },
    { name: 'Software Engineering', time: '2:45 p.m.' },
  ]);

  const navigate = useNavigate();

  return (
    <div>
        <Navbar />
        <Sidebar />
    <div className="bg-white ml-72 p-8 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Upcoming Schedules</h2>

      <div className="border-2 bg-gray-100 border-dashed border-gray-400 rounded-lg p-4">
        <ul className="list-disc pl-4">
          {schedules.map((schedule, index) => (
            <li key={index}>
              {schedule.name} ({schedule.time})
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex justify-between">
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Schedule Calendar</h3>
        {/* Add your calendar component here */}
      </div>
        <button
          className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => navigate("/add-deadline")}
        >
          + Add Deadline
        </button>
      </div>
    <div>
        <ScheduleCalendar />
    </div>
      
    </div>
    </div>
  );
};

export default Scheduling;