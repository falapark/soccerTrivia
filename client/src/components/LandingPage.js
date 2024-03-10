import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/landingPage.css';

const categories = [

const categories = [
  { name: 'Managers', image: 'managers.jpg',  class: 'managers'},
  { name: 'Challenge', image: 'challenge.jpg',  class: 'challenge' },
  { name: 'Clubs', image: 'clubs.jpg',  class: 'clubs' },
  { name: 'International Teams', image: 'international-teams.jpg', class: 'international-teams' },
  { name: 'Soccer Geography', image: 'soccer-geography.jpg',  class: 'soccer-geography' },
  { name: 'Guess The Player', image: 'guess-the-player.jpg',  class: 'guess-the' },
  { name: 'Players', image: 'players.jpg',  class: 'players' },
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
            <Link to="/main" className={`category-card ${category.class}`} key={index}>
              <img src={`/images/${category.image}`} alt={category.name} className="category-image" />
              <h3>{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
