class Quiz {
    // YOUR CODE HERE:
    //
    // 1. constructor (questions, timeLimit, timeRemaining)
    constructor (questions, timeLimit, timeRemaining) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }
    // 2. getQuestion()

    getQuestion () {
        return this.questions[this.currentQuestionIndex];
    }


    moveToNextQuestion() {
        this.currentQuestionIndex++;
    }

    shuffleQuestions() {
        for (let i = 0; i < this.questions.length; i++){ 
            let randomIndex = Math.floor(Math.random() * this.questions.length);
            let randomElement = this.questions[randomIndex];
            this.questions.splice(randomIndex, 1);
            this.questions.push(randomElement);
        } 
   
}
       

    // 5. checkAnswer(answer)

    // 6. hasEnded()
 }