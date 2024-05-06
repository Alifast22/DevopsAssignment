import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';  // Your Home page component
import ProjectsPage from './Pages/ProjectsPage';  // Your Projects page component
import EducationPage from './Pages/Education';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/education" element={<EducationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
