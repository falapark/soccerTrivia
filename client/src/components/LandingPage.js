import React from 'react';
import '../styles/landingPage.css';

const categories = [

  { name: 'Managers', icon: 'math-icon',  class: 'managers'},
  { name: 'Challenge', icon: 'math-icon',  class: 'challenge' },
  { name: 'Clubs', icon: 'math-icon',  class: 'clubs' },
  { name: 'International Teams', icon: 'math-icon', class: 'international-teams' },
  { name: 'Soccer Geography', icon: 'math-icon',  class: 'soccer-geography' },
  { name: 'Guess The Player', icon: 'math-icon',  class: 'guess-the' },
  { name: 'Players', icon: 'math-icon',  class: 'players' },
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
        <div className="category-grid">
          {categories.map((category, index) => (
            <div className={`category-card ${category.class}`} key={index}>
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
