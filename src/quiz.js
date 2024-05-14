class Quiz {
  // YOUR CODE HERE:
  //
  // 1. constructor (questions, timeLimit, timeRemaining)
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }
  // 2. getQuestion()

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }
  moveToNextQuestion() {
    this.currentQuestionIndex++;
  }

  shuffleQuestions() {
    for (let i = 0; i < this.questions.length; i++) {
      let randomIndex = Math.floor(Math.random() * this.questions.length);
      let randomElement = this.questions[randomIndex];
      this.questions.splice(randomIndex, 1);
      this.questions.push(randomElement);
    }
  }

  checkAnswer(answer) {
    this.correctAnswers++;
  }

  hasEnded() {
    if (this.currentQuestionIndex < this.questions.length) {
      return false;
    } else {
      return true;
    }
  }
  filterQuestionsByDifficulty(difficulty) {
    if (difficulty >= 1 && difficulty <= 3) {
      this.questions = this.questions.filter(
        (question) => question.difficulty === difficulty
      );
    }
  }

  averageDifficulty() {
    const sumDifficulty = this.questions.reduce(
      (acc, curr) => acc + curr.difficulty,
      0
    );

    const averageDifficulty = sumDifficulty / this.questions.length;

    return averageDifficulty;
  }
}
