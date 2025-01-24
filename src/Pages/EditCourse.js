import React from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function EditCourse() {

  const navigate = useNavigate();

  const [courses, setCourses] = React.useState([]);


  React.useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8000/courses');
        console.log(response.data.course)
        setCourses(response.data.course)
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourses()
  }, [])

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="ml-72 p-8">
        <h1>Edit Course</h1>
        <div className="bg-custom-pink mt-8 p-6 border-2 border-gray-500 ">
          <ul className="space-y-3">
            {courses.map((course) => (
              <li key={course.courseId} className="flex justify-between items-center">
                <span>{course.name}</span>
                <div className="flex space-x-2">
                  <button className="bg-custom-yellow hover:bg-yellow-700 text-white px-2 py-1 rounded"
                    onClick={() => navigate(`/edit-course-page/${course.courseId}`)}>
                    Edit <span className="pl-1">✎</span>
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded">
                    Delete <span className="pl-1">🗑️</span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EditCourse;
