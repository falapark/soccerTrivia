import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/landingPage.css';


const categories = [
  { name: 'Managers', image: '/managers.svg',  class: 'managers'},
  { name: 'Challenge', image: '/challenge.svg',  class: 'challenge' },
  { name: 'Clubs', image: '/clubs.svg',  class: 'clubs' },
  { name: 'International Teams', image: '/internationalTeams.svg', class: 'international-teams' },
  { name: 'Soccer Geography', image: '/soccerGeography.svg',  class: 'soccer-geography' },
  { name: 'Guess The Player', image: '/guessThe.svg',  class: 'guess-the' },
  { name: 'Players', image: '/players.svg',  class: 'players' },
  // ... other categories
];

const leaderboardData = [
  { name: 'Alice', score: 120 },
  { name: 'Bob', score: 110 },
  // ... other leaderboard entries
];

const LandingPage = () => {  const navigate = useNavigate();

  const handleLogin = () => {
    // Redirect to the server's login route using the correct environment variable
    window.location.href = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize?response_type=code&client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_SERVER_URL}/callback`;
  };

  // ... rest of the component
};
  return (
    <div className="landing-page">
      <div className="intro-section">
        <h1 className="animated-title">Soccer Quiz Challenge</h1>
        <p className="animated-tagline">Think you know soccer? Take on the challenge and climb the leaderboard!</p>
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
              <img src={`${category.image}`} alt={category.name} className="category-image" />
             </Link>
          ))}
        </div>
      </div>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default LandingPage;
