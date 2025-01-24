import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import axios from 'axios';
function EditCoursePage() {

    const [courseTitle, setCourseTitle] = useState('');
    const [units, setUnits] = useState('');
    const { courseId } = useParams();

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const putCourses = async () => {
            try {
                const response = await axios.put(`http://localhost:8000/course/${courseId}`, {
                    "name": courseTitle,
                })
                console.log(response)
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };
        putCourses()
        event.preventDefault();
        // Handle form submission logic here
        console.log({
            courseTitle,
            units,
        });
        // Clear form fields after submission
        setCourseTitle('');
        setUnits('');
    };

    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className="ml-72">
                <h1 className="m-8">Edit Course</h1>
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
                                id="units"
                                value={units}
                                onChange={(e) => setUnits(e.target.value)}
                                className="mt-1 p-2 w-fit border rounded-full focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
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

export default EditCoursePage;
