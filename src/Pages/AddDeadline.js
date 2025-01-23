import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import { useNavigate } from "react-router-dom";

const AddDeadline = () => {
  const [courseTitle, setCourseTitle] = useState('');
  const [unitRangeFrom, setUnitRangeFrom] = useState('');
  const [unitRangeTo, setUnitRangeTo] = useState('');
  const [deadlineDate, setDeadlineDate] = useState('');
  const [deadlineMonth, setDeadlineMonth] = useState('');
  const [deadlineYear, setDeadlineYear] = useState('');

  const navigate = useNavigate();
    
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({
      courseTitle,
      unitRange: `${unitRangeFrom}-${unitRangeTo}`,
      deadline: `${deadlineDate}-${deadlineMonth}-${deadlineYear}`,
    });
    // Clear form fields after submission
    setCourseTitle('');
    setUnitRangeFrom('');
    setUnitRangeTo('');
    setDeadlineDate('');
    setDeadlineMonth('');
    setDeadlineYear('');
  };

  return (
    <div>
        <Navbar />
        <Sidebar />
    <h2 className="text-lg ml-80 my-8 font-semibold mb-4">Add Deadline</h2>
    <div className="ml-72 bg-custom-pink p-6 rounded-lg">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="courseTitle" className="block text-sm font-medium text-gray-700">
            Course Title
          </label>
          <input
            type="text"
            id="courseTitle"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            className="mt-1 p-2 w-fit border-2 rounded-full focus:ring-blue-500 focus:border-black"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="unitRange" className="block text-sm font-medium text-gray-700">
            Unit Range
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              id="unitRangeFrom"
              value={unitRangeFrom}
              onChange={(e) => setUnitRangeFrom(e.target.value)}
              className="mt-1 p-2 w-20 border rounded-full focus:ring-blue-500 focus:border-blue-500"
            />
            <span className="text-gray-700">From</span>
            <input
              type="text"
              id="unitRangeTo"
              value={unitRangeTo}
              onChange={(e) => setUnitRangeTo(e.target.value)}
              className="mt-1 p-2 w-20 border rounded-full focus:ring-blue-500 focus:border-blue-500"
            />
            <span className="text-gray-700">To</span>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">
            Deadline
          </label>
          <div className="flex space-x-2">
            <input
              type="date"
              id="deadlineDate"
              value={deadlineDate}
              onChange={(e) => setDeadlineDate(e.target.value)}
              className="mt-1 p-2 w-1/4 border rounded-full focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className="bg-custom-pink hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-full mr-2"
            onClick={() => navigate("/scheduling")}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Save
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default AddDeadline;