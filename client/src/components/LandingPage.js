import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/landingPage.css';

const categories = [
  'History of Soccer',
  'World Cup',
  'Famous Players',
  'Soccer Rules',
  'Soccer Leagues',
  'Soccer Clubs',
  'Great Soccer Matches'
];

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1 className="title">Think You Know Soccer? Take the Challenge!</h1>
      <div className="categories">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <Link to={`/quiz/${category.toLowerCase().replace(/ /g, '-')}`}>
              {category}
            </Link>
          </div>
        ))}
      </div>
      <div className="leaderboard">
        <h2>Leaderboard</h2>
        {/* Leaderboard content goes here */}
      </div>
    </div>
  );
};

export default LandingPage;
