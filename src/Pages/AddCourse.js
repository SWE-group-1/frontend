import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import Sidebar from '../Components/Sidebar';
import { useNavigate } from "react-router-dom";

function AddCourse() {

  const [courseTitle, setCourseTitle] = useState('');
  const [credit_hour, setCreditHour] = useState('');
  const [weight, setWeight] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const postCourses = async () => {
      try {
        const response = await axios.post(`http://localhost:8000/students/${1}/addCourse`, {
          "name": courseTitle,
          "credit_hour": credit_hour,
          "weight": weight
        })
        console.log(response)
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    postCourses()
    // Handle form submission logic here
    // Clear form fields after submission
    setCourseTitle('');
    setCreditHour('');
    setWeight('');
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="ml-72 ">
        <h1 className="m-8">Add Courses</h1>
        <div className="bg-custom-pink p-6 rounded-lg">
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
                className="mt-1 p-2 w-fit border rounded-full focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="units" className="block text-sm font-medium text-gray-700">
                Units
              </label>
              <input
                type="number"
                id="credit_hour"
                value={credit_hour}
                onChange={(e) => setCreditHour(e.target.value)}
                className="mt-1 p-2 w-fit border rounded-full focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                Course weight
              </label>
              <textarea
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="mt-1 p-2 w-2/3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                rows={4}
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                className="bg-custom-pink hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-full mr-2"
                onClick={() => navigate("/course-management")}
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
    </div>
  );
}
export default AddCourse;
