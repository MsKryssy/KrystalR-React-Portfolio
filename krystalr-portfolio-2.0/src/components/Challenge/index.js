import React from 'react';
import '../Challenge/style.css';
import { challenges } from '../../data';

const Challenge = ({ challenge }) => {
    const matchingChallenge = challenges.find(ch => ch.name === challenge.name);
    if (!matchingChallenge) return null;
    
    return (
        <div className="col">
            <div className="card h-100">
                <img src={require(`../../assets/challenges/${challenge.name}.png`)} 
                alt={challenge.name} 
                className="card-img"/>              
                <div className="card-img-overlay">
                    <h3 className="card-title">
                        <a href={challenge.link} className="card-text me-3">
                        {challenge.name}
                        </a>
                        <a href={challenge.repo} className="card-text">Repository</a>
                    </h3>
                </div>
            </div>
        </div>
    );
};

 export default Challenge;