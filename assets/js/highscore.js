const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

highScoresList.innerHTML = highScores.map(score, function() {
	return '<li class="high-score">${score.score} - ${score.name}</li>'
}).join('')