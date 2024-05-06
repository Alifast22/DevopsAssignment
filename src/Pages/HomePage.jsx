import React from 'react';
import styled from 'styled-components';
import ProjectsPage from './ProjectsPage';

// Background image URL
const backgroundImageUrl = 'https://images.hdqwalls.com/wallpapers/snowy-blue-mountains-4k-e5.jpg';

// Styled component for the HomePage
const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background-image: url(${backgroundImageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(255, 255, 255, 0.8);

  .main-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem;
    color: #fff; /* Change text color */
  }

  .description-container {
    text-align: center;
    padding: 2rem;
    color: white; /* Change text color */
    // background-color: #fff; /* Change background color */
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add box shadow */
    margin: 2rem;
  }
`;

// Functional component for the homepage
const HomePage = () => {
  return (
    <HomePageContainer>
      <div className="main-content">
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my work and skills</p>
        <a className="btn btn-success mt-3" href='./projects'>Get Started</a>
      </div>
      <div className="description-container">
        <h2>Description</h2>
        <p className="description-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut urna vel dui ullamcorper fermentum. Duis pretium magna in lorem eleifend vestibulum. Integer at quam in leo lobortis malesuada. Duis nec massa ac purus ultricies tincidunt. Ut fringilla purus quis velit tincidunt, et suscipit libero posuere. Nam sollicitudin malesuada fermentum.
        </p>
        <p className="description-text">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </div>
    </HomePageContainer>
  );
};

export default HomePage;
