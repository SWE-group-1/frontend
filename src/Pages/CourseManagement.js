import React from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function CourseManagementPage() {

  const navigate = useNavigate();

  const [courses, setCourses] = React.useState([]);
  React.useEffect(() => {
    let isMounted = true; // flag to track component mounting status

    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8000/courses'); // Replace with your API endpoint
        if (isMounted) {
          console.log(response.data.course)
          setCourses(response.data.course)
        }
      } catch (error) {
        if (isMounted) {
          console.error('Error fetching courses:', error);
        }
      }
    };
    fetchCourses()
  }, [])

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="p-8 ml-72">
        <h1>All stats</h1>
        <div className="bg-custom-pink p-4 w-fit rounded-3xl flex ">
          <div className="flex flex-col p-4 px-8 justify-center border-r-2 border-r-gray-400 items-center">
            <img src='/Assets/Images/Icons-drawer.png' />
            <span>3/7 courses</span>
          </div>
          <div className="flex flex-col p-4 px-8 justify-center border-r-2 border-r-gray-400 items-center">
            <img src='/Assets/Images/units.png' />
            <span>30/70 Units</span>
          </div>
          <div className="flex flex-col p-4 px-8  justify-center items-center">
            <img src='/Assets/Images/learning.png' />
            <span>2 hours learning</span>
          </div>
        </div>

        <div className="flex justify-end mt-14 mb-2">
          <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={() => navigate("/add-course")}>
            Add <span className="pl-1">+</span>
          </button>
          <button className="bg-custom-yellow hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded"
            onClick={() => navigate("/edit-course")}>
            Edit <span className="pl-1">✎</span>
          </button>
        </div>
        <div className="bg-custom-pink border-2 border-gray-400">


          <div className="divide-y p-2 divide-gray-400">
            {courses.map((course, index) => (
              <div key={index} className="py-3 flex justify-between">
                <span>{course.name}</span>
                {course.status ? (
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-sm">
                    {course.status}
                  </span>
                ) : (
                  <span className="p-1 text-sm bg-blue-950 rounded-full text-white">{course.progress}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default CourseManagementPage;
