const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const scoreText = document.querySelector('#score');
const timerElement = document.querySelector('#timer');

var currentQuestion = 0;
var score = 0;

// list of questions
var questions = [
	{
		id: 1,
		question: 'What does HTML stand for?',
		choices: [
			'Hyper Text Making Language',
			'Hyper Text Markup Language',
			'Hyphen Text Marker Logistics',
			'Hope The Machine Launches',
		],
		answer: 2
	},
	{
		id: 2,
		question: 'What does CSS stand for?',
		choices: [
			'Collapsing Style Sheets',
			'Concave Standard Stove',
			'Cool Structured School',
			'Cascading Style Sheets',
		],
		answer: 4 
	},
	{
		id: 3,
		question: 'Which of these is not a git command?',
		choices: [
			'git commit',
			'git init',
			'git ineedagoodgrade',
			'git merge',
		],
		answer: 3
	},
	{
		id: 4,
		question: 'How would you write "please" as a class element for a section?',
		choices: [
			'<section class="please"></section>',
			'<please class="section"></please>',
			'<section id="please"></section>',
			'<class="please" section></section>'
		],
		answer: 1
	},
	{
		id: 5,
		question: 'Which of the following is not a CSS property?',
		choices: [
			'padding',
			'background-color',
			'margin',
			'soaboutthatgrade',
		],
		answer: 4
	}
];

// timer function that counts down from 60
// will add function to send directly to end page when I have the time
var timer = function() {
	setInterval(function() {
		if (timerElement.innerText !== "0")
			timerElement.innerText = timerElement.innerText - 1;
	}, 1000);
}

// displays the question 
var questionReader = function() {
	question.innerText = questions[currentQuestion].question;

	for (var i = 0; i < choices.length; i++) {
		choices[i].innerText = questions[currentQuestion].choices[i];
	}
}

// allows questions to move to the next
var nextQuestion = function() {
	currentQuestion = currentQuestion + 1;

	// when the question reaches the end, saves the score and sends you to the end page
	if (currentQuestion < questions.length) {
		questionReader();
	} else {
		localStorage.setItem('mostRecentScore', score)

		return window.location.assign('end.html')
	}
}

// records the score 
var scoreCounter = function() {
	scoreText.innerText = score;
}

// adds the score for the correct answer; deducts time for any other choices
var clickChoice = function(e) {
	var choiceAnswer = e.target.dataset.number;
	if (choiceAnswer == questions[currentQuestion].answer) {
		score += 100;
	} else {
		timerElement.innerText -= 5;
	}

	scoreCounter();
	nextQuestion();
}

var main = function() {
	// timer Interval
	timer();

	// question function
	questionReader();

	choices.forEach(function(choice) {choice.addEventListener("click", clickChoice)})
}

main();