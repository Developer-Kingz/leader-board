const renderScores = () => {
  const leaderboard = document.querySelector('.name ul');
  leaderboard.innerHTML = '';

  fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ny53bvmTZNAqKKu9OSx3/scores/',
  )
    .then((response) => response.json())
    .then((json) => {
      json.result.forEach((score) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${score.user}: ${score.score}`;
        leaderboard.appendChild(listItem);
      });
    });
};
export default renderScores;
