const renderScores = async () => {
  const leaderboard = document.querySelector('.name ul');
  leaderboard.innerHTML = '';

  try {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wR4ZMob09Wz9eXC8ot9q/scores/',
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch scores: ${response.status}`);
    }

    const json = await response.json();

    json.result.forEach((score) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${score.user}: ${score.score}`;
      leaderboard.appendChild(listItem);
    });
  } catch (error) {
    throw new Error('Unable to post');
  }
};

export default renderScores;
