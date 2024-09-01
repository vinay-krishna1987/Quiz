const questions = [
   {
      question: "Which is the largest animal in the world?",
      answer: [
         {text: "Shark", correct: false},
         {text: "Blue Whale", correct: true},
         {text: "Tiger", correct: false},
         {text: "Bull", correct: false},     
      ]
   }, {
      question: "Which is the smallest continent in the world?",
      answer: [
         {text: "Asia", correct: false},
         {text: "Antartica", correct: false},
         {text: "Africa", correct: false},
         {text: "Australia", correct: true},     
      ]
   }, {
      question: "Which is the largest animal in the world?",
      answer: [
         {text: "Shark", correct: false},
         {text: "Blue Whale", correct: true},
         {text: "Tiger", correct: false},
         {text: "Bull", correct: false},     
      ]
   }, {
      question: "Which is the largest animal in the world?",
      answer: [
         {text: "Shark", correct: false},
         {text: "Blue Whale", correct: true},
         {text: "Tiger", correct: false},
         {text: "Bull", correct: false},     
      ]
   }, {
      question: "Which is the largest animal in the world?",
      answer: [
         {text: "Shark", correct: false},
         {text: "Blue Whale", correct: true},
         {text: "Tiger", correct: false},
         {text: "Bull", correct: false},     
      ]
   }
];

const questionEl = document.getElementById("question");
const answerBtn = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
   let currentQuestionIndex = 0;
   let score = 0;
   nextBtn.innerHTML= "Next";
   showQuestion();
}

function showQuestion(){
   resetState();
   let currentQuestion = questions[currentQuestionIndex];
   let questionNo = currentQuestionIndex + 1;
   questionEl.innerHTML = questionNo + ". " + currentQuestion.question;

   currentQuestion.answer.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerBtn.appendChild(button);
      if(answer.correct){
         button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer)
   })
}

function selectAnswer(e){
   const selectedBtn = e.target;
   const isCorrect = selectedBtn.dataset.correct === "true";
   if(isCorrect){
      selectedBtn.classList.add("correct");
      score++;
   } else{
      selectedBtn.classList.add("incorrect");
   }
   Array.from(answerBtn.children).forEach(button => {
      if(button.dataset.correct === "true"){
         button.classList.add("correct");
      }
      button.disabled = true;
   });
   nextBtn.style.display = "block";
}

function showScore(){
   resetState();
   questionEl.innerHTML = `You scored ${score} out of ${questions.length}!`;
   nextBtn.innerHTML = "Play Again";
   
}

function handleNextBtn(){
   currentQuestionIndex++;
   if(currentQuestionIndex < questions.length){
      showQuestion();
   }else{
      showScore();
   }
}

nextBtn.addEventListener("click", ()=> {
   if(currentQuestionIndex < questions.length){
      handleNextBtn();
   }else{
      startQuiz();
   }
})

function resetState(){
   nextBtn.style.display = "none";
   while(answerBtn.firstChild){
      answerBtn.removeChild(answerBtn.firstChild);
   }
}
startQuiz();