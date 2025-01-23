import React, { useState } from 'react';

function CourseList() {
  const [courses, setCourses] = useState([
    { name: 'Software Engineering', unit: 'U1-U7' },
    { name: 'Software Engineering', unit: 'U1-U7' },
    { name: 'Software Engineering', unit: 'U1-U7' },
    { name: 'Software Engineering', unit: 'U1-U7' },
    { name: 'Software Engineering', unit: 'U1-U7' },
    { name: 'Software Engineering', unit: 'U1-U7' },
  ]);

  const handleAddCourse = () => {
    // Add a new course (you'll need to implement the logic to get the new course data)
    const newCourse = { name: '', unit: '' }; // Replace with actual data
    setCourses([...courses, newCourse]);
  };

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
          <button
            className="bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            onClick={handleAddCourse}
          >
            Add <span className="pl-1">+</span>
          </button>
          <button
            className="bg-custom-yellow hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg"
          >
            Edit <span className="pl-1">✎</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-custom-pink flex justify-between p-4 hover:shadow-md cursor-pointer"
            onClick={() => handleEditCourse(index)}
          >
            <p>{course.name}</p>
            <p>{course.unit}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseList;