import './style.css';
import renderScores from './modules/renderScores.js';

const getAllScores = document.querySelector('.refresh');
getAllScores.addEventListener('click', () => renderScores());

window.addEventListener('load', () => renderScores());

const postScore = document.querySelector('#score-form');

postScore.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(postScore);
  const user = data.get('name');
  const scoreString = data.get('score');
  const score = parseInt(scoreString, 10);

  try {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wR4ZMob09Wz9eXC8ot9q/scores/',
      {
        method: 'POST',
        body: JSON.stringify({ user, score }),
        headers: {
          'Content-type': 'application/json',
        },
      },
    );
    if (!response.ok) {
      throw new Error(`data not posted: ${response.status}`);
    }

    const json = await response.json();
    return {
      success: json.result === 'Leaderboard score created correctly.',
    };
  } catch (error) {
    throw new Error('Unable to post');
  }
});
