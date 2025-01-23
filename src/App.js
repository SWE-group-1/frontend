// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Auth/Login';
import Home from './Home';
import Register from './Components/Auth/Register';
import CourseManagement from './Pages/CourseManagement'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/course-management" element={<CourseManagement />} />
      </Routes>
    </Router>
  );
};

export default App;