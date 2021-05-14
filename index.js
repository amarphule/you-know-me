// How well Do you know me Quiz!!!
var readlinesync = require("readline-sync")

var userAns = readlinesync.question("what is your name?")
//Welcome message
console.log("Welcome ",userAns," How well do you know me? Let's see....")

var score = 0
//Database
var questions =[
  {
    question: "What is my Name?",
    answer: "Amar"
  },
  {
    question: "Where do I live?",
    answer: "Malinagar"
  },  
  {
    question: "Who is my favourite ckicketer?",
    answer: "Dhoni"
  }
]

function DoYouKnowMe(que, ans){
  var answer = readlinesync.question(que)

  if(answer == ans){
    console.log("Right")
    score += 1
    console.log(score)
  }else {
    console.log("Wrong")
  }
}

for(var i=0; i<questions.length; i++){
  DoYouKnowMe(questions[i].question, questions[i].answer)
}

if(score>=2){
  console.log("You Know Me Well, your score is "+score+". Thank you!")
}else{
  console.log("You Don't Know Me Well. Try Again!")
}