import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/landingPageEnhanced.css'; // Assume the CSS file name has changed to reflect the new styles

const categories = [
  'History of Soccer',
  'World Cup',
  'Famous Players',
  'Soccer Rules',
  'Soccer Leagues',
  'Soccer Clubs',
  'Great Soccer Matches'
];

// Function to handle category selection
const LandingPage = () => {
  const history = useHistory();
  return (
    <div className="landing-page">
      <h1 className="title" style={{ color: '#2ecc71' }}>Think You Know Soccer? Take the Challenge!</h1>
      <div className="categories">
        <div className="category-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card" onClick={() => handleCategoryClick(category, history)}>
              <Link to={`/quiz/${category.toLowerCase().replace(/ /g, '-')}`} className="category-link">
                <div className="category-content">
                  <div className="category-icon">{/* Icons related to the category will be added here */}</div>
                  <div className="category-title" style={{ color: '#2ecc71' }}>{category}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="intro-text">
        <p>Join the ranks of soccer experts! Test your knowledge and climb up the leaderboard!</p>
      </div>
      <div className="leaderboard">
        <h2 style={{ color: '#2ecc71' }}>Leaderboard</h2>
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
      <div className="cta-button">
        <button style={{ backgroundColor: '#f1c40f' }}>Start Quiz</button>
      </div>
    </div>
  );
};

export default LandingPage;
