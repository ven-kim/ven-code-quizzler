const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

// converts the highscores received from localstorage into list elements to be displayed on highscore page
highScoresList.innerHTML = highScores.map(function(score) {
	return `<li class="high-score">${score.score} - ${score.name}</li>`
}).join('')