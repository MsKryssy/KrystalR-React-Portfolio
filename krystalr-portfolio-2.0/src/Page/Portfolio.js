import React from 'react';
import { challenges } from '../data';
import Challenge from '../components/Challenge';

const Portfolio = () => {
  return (
    <div className='row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4'>
        {challenges.map((challenge, i) => (
          <Challenge challenge={challenge} key={i} />
        ))}
    </div>
  );
};

export default Portfolio;