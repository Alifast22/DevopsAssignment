import React from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  padding: 5rem 1rem;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

const CourseCard = styled.div`
  flex: 0 0 auto;
  width: 33.333333%;
  padding: 0 15px;
  margin-bottom: 30px;

  .card {
    display: flex;
    flex-direction: column;
    height: 100%;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }

    img {
      width: 100%;
      border-radius: 0.25rem 0.25rem 0 0;
    }

    .card-body {
      flex: 1 1 auto;
      padding: 1.25rem;
    }
  }
`;

const courses = [
  {
    id: 1,
    title: 'Basic Problem Solving',
    description: 'Certified by Hackerank',

  },
  {
    id: 2,
    title: 'Junior Backend Developer',
    description: 'Certified by IBM',

  },
  {
    id: 3,
    title: 'MERN Stack Developer',
    description: 'Certified by PIAIC',
  },

];

const CertificationPage = () => {
  return (
    <Container>
      <h2 className="mb-4">List of Certifications</h2>
      <Row>
        {courses.map(course => (
          <CourseCard className="col-md-4 mb-3" key={course.id}>
            <div className="card">
              
              <div className="card-body">
                <h5>{course.title}</h5>
                <p>{course.description}</p>
              </div>
            </div>
          </CourseCard>
        ))}
      </Row>
    </Container>
  );
};

export default CertificationPage;
