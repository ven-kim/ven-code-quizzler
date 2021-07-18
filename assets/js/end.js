const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

// displays the score you received from the quiz
finalScore.innerText = mostRecentScore

// enables the submit button to be pressed only after a value is inputed as the name of the player
username.addEventListener('keyup', function() {
	saveScoreBtn.disabled = !username.value
})

var saveHighscore = function(e) {
	e.preventDefault()

	// creates a variable for score and the player to be listed
	const score = {
			score: mostRecentScore,
			name: username.value
	}

	// creates highScores through JSON object conversion to be grabbed from localstorage
	if (localStorage.getItem('highScores')) {
		var highScoreArray = JSON.parse(localStorage.getItem('highScores'));
		highScoreArray.push(score);
	} else {
		var highScoreArray = [];
		highScoreArray.push(score);
	}

	// sorts the player and score to be listed on the highscores page
	highScoreArray.sort(function(a, b) {
			return b.score - a.score
	})

	// assign the highscore name and value to be stored as sorted to be pulled in the highscore.js
	localStorage.setItem('highScores', JSON.stringify(highScoreArray))
	window.location.assign('highscore.html')
}