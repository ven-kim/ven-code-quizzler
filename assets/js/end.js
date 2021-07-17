const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

finalScore.innerText = mostRecentScore

// enables the submit button to be pressed only after a value is inputed as the name of the player
username.addEventListener('keyup', function() {
	saveScoreBtn.disabled = !username.value
})

saveHighscore = function(e) {
	e.preventDefault()

	// creates a variable for score and the player to be listed
	const score = {
			score: mostRecentScore,
			name: username.value
	}

	// pushes the player and score to be added as new items on the list
	highScoresList.push(score)

	// sorts the player and score to be listed on the highscores page
	highScoresList.sort((a,b), function() {
			return b.score - a.score
	})

	// highScoresList.splice(5)

	localStorage.setItem('highScores', JSON.stringify(highScores))
	window.location.assign('highscore.html')
}