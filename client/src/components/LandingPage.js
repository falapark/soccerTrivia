import React from 'react';
import './LandingPage.css'; // Assuming the CSS file is named LandingPage.css

const categories = [
  { name: 'Science', icon: 'science-icon' },
  { name: 'Math', icon: 'math-icon' },
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
        <h1>Welcome to the Quiz Challenge!</h1>
        <p>Test your knowledge and see how you rank against other quiz-takers.</p>
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
        <h2>Choose a Category</h2>
        <div className="category-grid">
          {categories.map((category, index) => (
            <div className="category-card" key={index}>
              <div className={category.icon}></div>
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="cta-section">
        <button className="cta-button">Start Quiz</button>
      </div>
    </div>
  );
};

export default LandingPage;
