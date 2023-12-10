const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

let currentQuestionIndex = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  nextButton.classList.add('hide');
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionContainer.innerText = question.question;
  clearAnswerButtons();
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(answer));
    answerButtons.appendChild(button);
  });
}

function clearAnswerButtons() {
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(answer) {
  const correct = answer.correct;
  if (correct) {
    // Provide feedback for correct answer
    alert('Correct!');
  } else {
    // Provide feedback for incorrect answer
    alert('Incorrect!');
  }

  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion(questions[currentQuestionIndex]);
  } else {
    // Display results or navigate to a new page
    alert('Quiz completed!');
    nextButton.classList.remove('hide');
  }
}

function nextQuestion() {
  startQuiz();
}

// Start the quiz when the page loads
startQuiz();
