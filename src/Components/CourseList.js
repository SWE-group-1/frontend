import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function CourseList() {
  // const [courses, setCourses] = useState([""]);
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();



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

  const handleEditCourse = (index) => {
    // Handle editing the course at the given index
    // (e.g., open a modal for editing)
    console.log(`Editing course at index ${index}`);
  };

  return (
    <div className=" p-4 rounded-lg">
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-semibold">Current Courses</h2>
        <div className="flex space-x-2">
          <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={() => navigate("/add-course")}>
            Add <span className="pl-1">+</span>
          </button>
          <button className="bg-custom-yellow hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded"
            onClick={() => navigate("/edit-course")}>
            Edit <span className="pl-1">✎</span>
          </button>        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-custom-pink flex justify-between p-4 hover:shadow-md cursor-pointer"
            onClick={() => handleEditCourse(index)}
          >
            <p>{course.name}</p>
            <p>{course.credit_hour}</p>
            <p>{course.weight}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseList;
