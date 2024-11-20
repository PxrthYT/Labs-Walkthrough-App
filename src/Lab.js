import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';
import './Lab.css';

const labDetails = [
    { 
      id: 1, 
      title: 'Lab 1: Introduction to Git', 
      description: 'Learn the basics of version control with Git, including initializing repositories, staging changes, committing, and understanding the importance of Git in software development.' 
    },
    { 
      id: 2, 
      title: 'Lab 2: Introduction to JavaScript', 
      description: 'Get started with JavaScript, exploring its syntax, variables, data types, and how it can be used to add interactivity to web pages.' 
    },
    { 
      id: 3, 
      title: 'Lab 3: JS Conditionals and Logic Flow', 
      description: 'Dive deeper into JavaScript with conditionals, logical operators, and control flow to create dynamic and responsive code.' 
    },
    { 
      id: 4, 
      title: 'Lab 4: JS and the DOM', 
      description: 'Learn how to manipulate the Document Object Model (DOM) using JavaScript, including selecting elements, modifying content, and handling events.' 
    },
    { 
      id: 5, 
      title: 'Lab 5: Working with Arrays and Loops', 
      description: 'Understand how to efficiently work with arrays and loops in JavaScript to store, process, and iterate through data collections.' 
    },
    { 
      id: 6, 
      title: 'Lab 6: Web Crawler', 
      description: 'Implement a basic web crawler using JavaScript to retrieve and process information from web pages.' 
    },
    { 
      id: 7, 
      title: 'Lab 7: React Basics', 
      description: 'Build your first React application, understanding the fundamentals of React components, state, props, and how to deploy the app.' 
    }
];

function Lab() {
  const { id } = useParams();
  const navigate = useNavigate();
  const lab = labDetails[parseInt(id) - 1];

  const animationProps = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(20px)' },
  });

  const handleNavigation = (step) => {
    const nextId = parseInt(id) + step;
    if (nextId >= 1 && nextId <= labDetails.length) {
      navigate(`/lab/${nextId}`);
    }
  };

  if (!lab) {
    return <div>Lab not found!</div>;
  }

  return (
    <animated.div style={animationProps} className="lab-container">
      <h2>{lab.title}</h2>
      <p>{lab.description}</p>
      <div className="navigation-buttons">
        {id > 1 && (
          <button onClick={() => handleNavigation(-1)}>Previous</button>
        )}
        {id < labDetails.length && (
          <button onClick={() => handleNavigation(1)}>Next</button>
        )}
      </div>
    </animated.div>
  );
}

export default Lab;
