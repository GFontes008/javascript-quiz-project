class Question {
    // YOUR CODE HERE:
    //
    // 1. constructor (text, choices, answer, difficulty)

    constructor (text, choices, answer, difficulty) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
        this.difficulty = difficulty;
    }


   
// 2. shuffleChoices()

 shuffleChoices() { 
    
    for (let i = 0; i < this.choices.length; i++){ 
        let randomIndex = Math.floor(Math.random() * this.choices.length);
        let randomElement = this.choices[randomIndex];
        this.choices.splice(randomIndex, 1);
        this.choices.push(randomElement);
    } 
}
}   


    
     
   
