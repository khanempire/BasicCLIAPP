const input=require('readline-sync');
const chalk=require('chalk');
console.log(chalk.green("Hello there! Welcome to the CLI World"));
var name=input.question("Can you please tell your name? ");
console.log("Ok! Welcome "+name);
console.log("Let's play games, how much you know me");
var status=input.question(chalk.yellowBright("Are you ready? Yes or No"));
if(status==="Yes"){
  console.log("Let's get started");
}else{
  console.log("ohh! You are not ready, No problem, you can leave the game by pressing control C");
}
var high_scores=0;
var scores=0;
var winner_name="";

//function to play games 
function playGames(question,answer){
  var userAnswer=input.question(chalk.red(question));
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    scores=scores+1;
    console.log(chalk.green("Your answer is " +userAnswer+ "which is right"));
    console.log("Your score is incremented by one");
  }else{
    console.log(chalk.underline.bgRed("Your answer is "+userAnswer+ " which is wrong"));
    console.log("Your score is decremented by one");
  }
}

var questions=[
  {
    question:"Where do I live?",
    answer:"Bihar"
  },
  {
    question:"What is my favourite color?",
    answer:"Black"
  },
  {
    question:"Which technology, I am interested in?",
    answer:"Mern Stack"
  },
  {
    question:"What is my passion?",
    answer:"Developing web-applications"
  },
  {
    question:"What is my favourite sports?",
    answer:"Cricket"
  },
  {
    question:"Do I like travelling or not?",
    answer:"Yes"
  }
];

for(let i=0;i<questions.length;i++){
    const currentQuestion=questions[i];
    console.log(chalk.bgBlue("Question no "+ (i+1)));
    playGames(currentQuestion.question,currentQuestion.answer);
    console.log("---------------------------");
}

console.log(chalk.underline.green("Your scores is "+scores));
if(high_scores<scores){
  high_scores=scores;
  console.log(chalk.underline.green("Congratulations! "+name +" You are the ultimate winner of this game"));
  winner_name=name;
}
else{
  var remaining_score=high_scores-scores;
  console.log(chalk.bgRed("You are just missed by " +remaining_score+ " points to get the top positions"));
  console.log(chalk.bgRed("Neverthless, you can try again!"));
}

