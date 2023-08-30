import React from 'react';
import { challenges } from '../../data';
import './style.css';

const Challenge = ({ challenge }) => {
   return (
        <div className="col">
            <div className="card h-100">
                <img src={require(`../../assets/challenges/${challenge.name}.png`)} 
                alt={challenge.name} 
                className="card-img"/>              
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <h3 className="card-title">
                        <a href={challenge.link} className="card-text me-3">
                        {challenge.name}
                        </a>
                        <a href={challenge.repo} 
                        className="card-text">Repository</a>
                    </h3>
                </div>
            </div>
        </div>
    );
};
const ChallengesList = () => {
    return (
        <div className='challenges-list'>
            <div className="row">
                {challenges.map(challenge => (
                    <Challenge key={challenge.name} challenge={challenge} />
                ))}
                </div>
        </div>
    )
}
export default ChallengesList;