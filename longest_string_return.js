// Write a function that takes a string and returns the longest word in the string

// split the string into individual words
// create a loop that pushes and counts each word
// count the characters in each word (and come up with some kind of a counter)
// compare the numbers to get to the largest one
// return the largest one


function longest(sentence) {

var newsentence = sentence.split(" ");
var max = 0;

for (i=0; i=newsentence.length; i++) {
var sentenceArray = newsentence.shift();
var comparative = sentenceArray.length;

if (comparative > max) {
  var max = comparative;
  var longestword = sentenceArray;
    }
  }
console.log(longestword);
}

longest("this is a realllll'ly long sentence");
