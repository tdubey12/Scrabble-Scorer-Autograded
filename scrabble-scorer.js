// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble! Enter a word:");
   let word=input.question("enter a word");
   console.log( oldScrabbleScorer(word));
};

let simpleScorer = function (word){
   let scorePoints =0;
   for (let i=0;i<word.length;i++) {
      let letter=word[i];
      if(letter.toUpperCase() != letter.toLowerCase()){
         scorePoints++;
      }
   }
   //console.log("score"+scorePoints);
   return scorePoints;
}

let vowelBonusScorer =function (word){
   let scorePoints =0;

   for(let i=0;i<word.length;i++){
      let letter=word[i].toUpperCase();
      if(letter =="A" || letter=="E" || letter=="I" ||letter=="O" || letter=="U" ){
         scorePoints +=3;
      } else{
         scorePoints++;
      }
      
   }
   return scorePoints;
}

let scrabbleScorer = function(word){
   word = word.toLowerCase();
	let letterPoints = 0;
	for (let i = 0; i < word.length; i++) {
   
	  let letter =word[i];
	  letterPoints+=newPointStructure[letter];
	}
	return letterPoints;
}

const scoringAlgorithms = [{
   name:"Simple Score",
   description:"Each letter is worth 1 point.",
   scorerFunction: simpleScorer
},{
   name:"Bonus Vowels",
   description:"Vowels are 3 pts, consonants are 1 pt.",
   scorerFunction: vowelBonusScorer
}  
,{
   name:"Scrabble",
   description:"The traditional scoring algorithm. ",
   scorerFunction: scrabbleScorer
}];

function scorerPrompt() {
   console.log("Let's play some scrabble! Enter a word:");
   let word=input.question("enter a word");
   console.log( " Which scoring algorithm would you like to use?\n   0 - Simple: One point per character\n   1 - Vowel Bonus: Vowels are worth 3 points\n   2 - Scrabble: Uses scrabble point system");  
   let algorithm=input.question(" Enter 0, 1, or 2:")
   let score=scoringAlgorithms[algorithm].scorerFunction(word);
   console.log("score for "+word+": "+score);

}

function transform(oldPointStructure) {
   let newPointStructure={};
   for(const item in oldPointStructure){
      let letters=oldPointStructure[item];
      for(i=0;i<letters.length;i++){
         newPointStructure[letters[i].toLowerCase()]=Number(item);
         console.log(item);
      }
   }
   return newPointStructure;
}
let newPointStructure=transform(oldPointStructure);

/*let newPointStructure={
  "a": 1,
  "b": 3,
  "c":3,
  "d":2,
  "e":1,
  "f":4,
  "g":2,
  "h":2,
  "i":1,
  "j":8,
  "k":5,
  "l":1,
  "m":3,
  "n":1,
  "o":1,
  "p":3,
  "q":10,
  "r":1,
  "s":1,
  "t":1,
  "u":1,
  "v":2,
  "w":2,
  "x":8,
  "y":2,
  "z":10
}*/



function runProgram() {
   //initialPrompt();
   //simpleScorer("apple1");
   scorerPrompt();
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
