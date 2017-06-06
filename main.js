// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// A:

var max = function(a,b){
    // Your answer here
    if (a > b){
      return a;
    } else if (b > a){
      return b;
    } else {
      return 'these numbers are equal';
    }

}


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// A:

var maxOfThree = function(a, b, c){
    // Your answer here
    if (a >= b) {
      var firstGreatest = a;
    } else {
      var firstGreatest = b;
    };
    if (firstGreatest >= c) {
      return firstGreatest;
    } else {
      return c;
    }
  }


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// A:

var isVowel = function(char){
    // Your answer here
    var vowels = ['a','e','i','o','u','y'];
    var vowelCheck = function() {
      for (i = 0; i < char.length; i++) {
        if (char === vowels[i]){
          return true;
        } else {
          return false;
        }
      }
    }
  if (char.length !== 1){
    return 'argument must be one character only'
  } else if (vowelCheck()){
      return true;
    } else {
      return false;
      }
}



// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// A:
var sum = function(a,b){
  if (typeof a !== 'number' || typeof b !== 'number'){
    return 'parameters must be numbers';
  } else {
    return a + b;
  }
}



// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// A:
var avg = function(a,b,c){
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number'){
    return 'parameters must be number';
  } else {
    return (a + b + c) / 3;
  }
}


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// A:
var getLength = function(a){
  if (typeof a !== 'string'){
    return 'parameter must be a string';
  } else {
    return a.length;
  }
}




// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// A:
var greaterThan = function(a,b){
  if (typeof a !== 'number' || typeof b !== 'number'){
    return "parameters must be numbers";
  } else if (b > a) {
    return true;
  } else {
    return false;
  }
}



// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// A:
var greet = function(a){
    if (typeof a !== 'string'){
      return 'parameter must be a string';
    } else {
      return 'Hello, ' + a + '!';
    }
}



// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// A:
var madLib = function(a,b,c,d){
  if (typeof a !== 'string' || typeof b !== 'string' || typeof c !== 'string' || typeof d !== 'string'){
    return 'parameters must be strings';
  } else {
    return 'It must be ' + a + ' difficult to ' + b + ' a madlib without knowing that the ' + c + ' parameters should be (adjective, verb, explative adjective, name), eh ' + d + '?'; 
  }
}
