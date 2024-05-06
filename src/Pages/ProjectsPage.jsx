import React, { useState } from 'react';

// Sample data for projects
const projects = [
  { id: 1, title: 'Payroll Management', TechStack: 'Javascript' },
  { id: 2, title: 'Ecommerce Store', TechStack: 'Javascript' },
  { id: 3, title: 'Plag Checker', TechStack: 'C#' },
  { id: 4, title: 'Rental Car', TechStack: 'C' },
  { id: 5, title: 'Phishing Detection', TechStack: 'Python' },
];

// Project Modal Component
const ProjectModal = ({ project, show, handleClose }) => {
  return (
    <div className={`modal ${show ? "d-block" : ""}`} tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{project.title}</h5>
            <button type="button" className="btn-close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <p>{project.description}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Projects Page Component
const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setModalShow(true);
  };

  const handleClose = () => {
    setModalShow(false);
  };
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  
  const filteredProjects = projects.filter(project => project.TechStack.toLowerCase().includes(filter.toLowerCase()));
  

  return (
    <div className="container py-5">
    <div className="mb-3">
      <input 
        type="text" 
        className="form-control" 
        placeholder="Filter by Tech Stack" 
        value={filter} 
        onChange={handleFilterChange} 
      />
    </div>
    <div className="row" style={{ cursor: 'pointer' }}>
      {filteredProjects.map((project) => (
        <div className="col-md-4 mb-3" key={project.id}>
          <div className="card" onClick={() => handleCardClick(project)}>
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.TechStack}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    {selectedProject && (
      <ProjectModal project={selectedProject} show={modalShow} handleClose={handleClose} />
    )}
  </div>
  );
};

export default ProjectsPage;
