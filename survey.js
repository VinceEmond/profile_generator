// Survey.js
// To help out our fellow users, let's create a quick survey app which asks the user a bunch of questions like their favourite music, activity, food, sport, etc. It will then generate a profile description for them to use online, like the example demonstrated above.


const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });

let answers = {};

const askQuestion = (question, nextQuestion, questionKey) => {
  console.clear();
  rl.question(question, (answer) => {

    answers[questionKey] = answer;
    console.clear();
    nextQuestion();
  });
};

const question1 = () => {
  askQuestion(`What's your name? Nicknames are also acceptable :)  \n`, question2, "name");
};

const question2 = () => {
  askQuestion(`What's an activity you like doing?  \n`, question3, "activity");
};

const question3 = () => {
  askQuestion(`What do you listen to while doing that? \n`, question4, "music");
};

const question4 = () => {
  askQuestion(`Which meal is your favourite (eg: dinner, brunch, etc.) \n`, question5, "mealTime");
};

const question5 = () => {
  askQuestion(`What's your favourite thing to eat for that meal? \n`, question6, "meal");
};

const question6 = () => {
  askQuestion(`Which sport is your absolute favourite? \n`, question7, "sport");
};

const question7 = () => {
  askQuestion(`What is your superpower? In a few words, tell us what you are amazing at! \n`, endOfQuestions, "superpower");
};

const endOfQuestions = () => {
  console.log(`Thanks for your answers ${answers[0]}! Here's your custom paragraph: `);
  console.log("\n");
  console.log(`${answers.name} loves listening to ${answers.music} while ${answers.activity}, devouring ${answers.meal} for ${answers.mealTime} , prefers ${answers.sport}  over any other sport, and ${answers.superpower}.`);
  console.log("\n");
  rl.close();
};

//Start Questionnaire
question1();




