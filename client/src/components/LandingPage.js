import React from 'react';
import '../styles/landingPage.css';

const categories = [
  { name: 'Clubs', icon: 'science-icon' },
  { name: 'Managers', icon: 'math-icon' },
  { name: 'Challenge', icon: 'math-icon' },
  { name: 'Clubs', icon: 'math-icon' },
  { name: 'Internaltional Teams', icon: 'math-icon' },
  { name: 'Soccer Geography', icon: 'math-icon' },
  { name: 'Guess The Player', icon: 'math-icon' },
  // ... other categories
];

const leaderboardData = [
  { name: 'Alice', score: 120 },
  { name: 'Bob', score: 110 },
  // ... other leaderboard entries
];

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="intro-section">
        <h1>Soccer Quiz Challenge</h1>
        <p>Think you know soccer? Take on the challenge and climb the leaderboard!</p>
      </div>
      <div className="leaderboard-section">
        <h2>Leaderboard</h2>
        <table className="leaderboard">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((entry, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{entry.name}</td>
                <td>{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="category-section">
        <h2>Quiz Categories</h2>
        <p>Click on a category below to start the quiz!</p>
        <div className="category-container">
          {categories.map((category, index) => (
            <div className="category-card" key={index}>
              <div className={category.icon}></div>
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
