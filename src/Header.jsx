import React from 'react';

// Functional component for the homepage
const Header = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">My Portfolio</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">Homepage</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/education">Education</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/certification">Certification</a>
              </li>              
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Header;
