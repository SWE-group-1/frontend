// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Auth/Login';
import Home from './Home';
import Progress from './Pages/Progress';
import AddCourse from './Pages/AddCourse';
import Scheduling from './Pages/Scheduling';
import EditCourse from './Pages/EditCourse';
import AddDeadline from './Pages/AddDeadline';
import Register from './Components/Auth/Register';
import EditCoursePage from './Pages/EditCoursepage';
import CourseManagement from './Pages/CourseManagement'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/add-course" element={<AddCourse />} />
        <Route path="/edit-course" element={<EditCourse />} />
        <Route path="/scheduling" element={<Scheduling />} />
        <Route path="/add-deadline" element={<AddDeadline />} />
        <Route path="/edit-course-page" element={<EditCoursePage />} />
        <Route path="/course-management" element={<CourseManagement />} />
      </Routes>
    </Router>
  );
};

export default App;