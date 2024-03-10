import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/landingPage.css';


const categories = [
  { name: 'Managers', image: '../../public/managers.svg',  class: 'managers'},
  { name: 'Challenge', image: '../../public/challenge.svg',  class: 'challenge' },
  { name: 'Clubs', image: '../../public/clubs.svg',  class: 'clubs' },
  { name: 'International Teams', image: '../../public/international-teams.svg', class: 'international-teams' },
  { name: 'Soccer Geography', image: '../../public/soccer-geography.svg',  class: 'soccer-geography' },
  { name: 'Guess The Player', image: '../../public/guess-the-player.svg',  class: 'guess-the' },
  { name: 'Players', image: '../../public/players.svg',  class: 'players' },
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
