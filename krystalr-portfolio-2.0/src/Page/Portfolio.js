import React from 'react';
import { challenges } from './data';
import Challenges from './components/Challenges';

const Portfolio = () => {
  return (
    <div className='row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 mt-3'>
        {challenges.map((challenge, i) => (
          <Challenges key={i} challenges />
        ))}
    </div>
  );
};

export default Portfolio;

// in this file we are importing the challenges from the data file and react 