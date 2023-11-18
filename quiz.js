const questions=[
    {
        question: "What is the capital of France?",
        answer: [
            {text:"Paris", correct:true},
            {text:"London", correct:false},
            {text:"Berlin", correct:false},
            {text:"New-delhi",correct:false},
            
        ]
    },
        
    {
        question: "What is the largest animal in the world",
        answer: [
            {text:"elephant", correct:false},
            {text:"bluewhale", correct:true},
            {text:"giraffe", correct:false},
            {text:"lion",correct:false},
            
        ]
    },

    {
        question: "Which planet has a red color",
        answer: [
            {text:"Earth", correct:false},
            {text:"Mars", correct:true},
            {text:"Venus", correct:false},
            {text:"Jupiter",correct:false},
            ]

    },

    {
        question: "Who was the first president of USA",
        answer: [
            {text:"George Washington", correct:true},
            {text:"John F. Kennedy", correct:false},
            {text:"Bill Clinton", correct:false},
            {text:"Barack Obama",correct:false},
        ]
    },

    {
        question: "How many continents are there in the world",
        answer: [
            {text:"7", correct:true},
            {text:"8", correct:false},
            {text:"9", correct:false},
            {text:"10",correct:false},
        ]

    },

    {
        question: "Which country has the highest population?",
        answer: [
            {text:"China", correct:false},
            {text:"India", correct:true},
            {text:"USA", correct:false},
            {text:"Russia",correct:false},
        ]
    }
];


const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score=0;

function showQuestions(){
   resetState();

  let currentQuestion=questions[currentQuestionIndex];
  let questionNo=currentQuestionIndex+1;
  questionElement.innerHTML=questionNo+"."+currentQuestion.question;
  
currentQuestion.answer.forEach(answers => {
const button= document.createElement("button");
button.innerHTML=answers.text;
button.classList.add("btn");
answerButtons.appendChild(button);
if(answers.correct){
    button.dataset.correct=answers.correct;
}
button.addEventListener("click",selectAnswer);
});
}

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestions();
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e){
    const selectedButton=e.target;
    const isCorrect=selectedButton.dataset.correct==="true";
    if(isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else{
        selectedButton.classList.add("wrong");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
          }
          button.disabled=true;
});
   nextButton.style.display="block";
   
}

   function showScore(){
    resetState();
    questionElement.innerHTML=`You Scored ${score} out of ${questions.length}!  `;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block"; 
   }

 function handleNextButton(){
    currentQuestionIndex++ ;
    if(currentQuestionIndex<questions.length){
        showQuestions();
    }else{
        showScore();
    }
   
 }

 nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
 });
startQuiz();
