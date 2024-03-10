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
        <div className="category-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <Link to={`/quiz/${category.toLowerCase().replace(/ /g, '-')}`} className="category-link">
                <div className="category-content">
                  <div className="category-icon">{/* Icon related to the category */}</div>
                  <div className="category-title">{category}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="leaderboard">
        <h2>Leaderboard</h2>
        {/* Leaderboard content goes here */}
        <div className="leaderboard-content">
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Player</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {/* Leaderboard rows will be dynamically inserted here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
