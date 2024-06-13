// script.js
const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const scoreDisplay = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;


function loadQuestion(question) {
  questionText.innerText = question.question;
  answerButtons.innerHTML = '';
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(answer.correct));
    answerButtons.appendChild(button);
    
  });
}


function selectAnswer(correct) {
  if (correct) {
    score++;
    scoreDisplay.innerText = score;
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion(questions[currentQuestionIndex]);
  } else {
   
    alert(`Quiz completed! Your score: ${score}`);
    
  }
}




loadQuestion(questions[currentQuestionIndex]);
