let challenge = "30 Days of JavaScript"; //Answer one
console.log(challenge); //Answer 2
console.log(challenge.length);  //answer 3
console.log(challenge.toUpperCase());   //Answer 4
console.log(challenge.toLowerCase());   //Answer 5
console.log(challenge.substr(3, 10));   //Answer 6
console.log(challenge.substr(3, 21));   //Answer 7
console.log(challenge.includes("Script"));  //Answer 8
console.log(challenge.split());      //Aswer 9
console.log(challenge.split(" "));  //Answer 10
let myArray =["Faceboook", "Google", "Microsoft", "Apple","IBM", "Oracle", "Amazon"];
console.log(myArray);    //Answer 11
console.log(challenge.replace("JavaScript", "Python")); //Answer 12
console.log(challenge.charAt(15));  //Answer 13
console.log(challenge.charAt(11)); //Answer 14
console.log(challenge.indexOf('a'));  //Answer 15
console.log(challenge.lastIndexOf('a'));  //Answer 16
let sentence = "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because"));  //Answer 17
console.log(sentence.lastIndexOf("because"));  //Answer 18
console.log(sentence.search("because"));     //Answer 19
console.log(challenge.trim());  //Answer 20
console.log(challenge.startsWith(30));  //answer 21
console.log(challenge.endsWith("JavaScript")); //Answer 22
console.log(challenge.match(/a/g)); //Answer 23
let sentenceOne = "30 Days Of";
let sentenceTwo = " Javascript";
console.log(sentenceOne.concat(sentenceTwo));  //Answer 24
let print = " 30 Days Of JavaScript";
console.log(print.repeat("2"));


///Level 2

let statement = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(statement);  //Answer 1

let quote = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(quote); //Answer 2

let num1 = typeof('10');
if (num1 === 10) {
    console.log('yes')
} else if (num1 !== 10) {
    num1 = 10
    console.log(num1)
};                       //Answer 3

let number1 = parseFloat('9.8');
if (number1 === 10) {
    console.log('yes')
} else if (number1 !== 10) {
    number1 = 10
    console.log(number1)
};                     //Answer 4

let firstLetters = "python";
let secondLetters = "jargon";
console.log(firstLetters.includes('on'));
console.log(secondLetters.includes('on'));    //Answer5

let thirdLetters = "I hope this course is not full of jargon";
console.log(thirdLetters.includes('jargon')) ;  //Answer 6

let randomNum1 = Math.floor(Math.random() * 101);
console.log(randomNum1);  //Answer 7

let randomNum2 = Math.floor(Math.random() * 51);
console.log(randomNum2); //Answer 8

let randomNum3 = Math.floor(Math.random() * 256);
console.log(randomNum3);  //Answer 9


/* 1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125 */
console.log('1 1 1 1 1\n2 2 1 2 4 8\n3 3 1 3 9 27\n4 4 1 4 16 64\n5 5 1 5 25 125');  //Answer 11


let Sentence ="You cannot end a sentence with because because because is a conjunction"
let slicedSentence = sentence.substr(sentence.indexOf("because"));
console.log(slicedSentence);    //Answer 12


//Level three
let sentenceLove ="Love is the best thing in this world. Some found their love and some are still looking for their love.";
let numOfLove = sentenceLove.match(/love/g);
console.log(numOfLove); //Answer 1

let sentenceBecause ="You cannot end a sentence with because because because is a conjunction";
let numOfBecause = sentenceBecause.match(/because/g)
console.log(numOfBecause);    //Answer 2


