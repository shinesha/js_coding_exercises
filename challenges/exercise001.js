function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  return word.charAt(0).toUpperCase() + word.substring(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!
  return firstName.charAt(0) + "." + lastName.charAt(0);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
  var calc = ((originalPrice / 100) * vatRate) + originalPrice;
  return Math.round(calc * 100.0) / 100.0;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
  var calc = originalPrice - ((originalPrice / 100) * reduction);
  return Math.round(calc * 100.0) / 100.0;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
  var position, length;
  if ((str.length % 2) == 0) {
    position = str.length / 2 - 1;
    length = 2;
  } else {
    position = (str.length - 1) / 2;
    length = 1;
  }
  return str.substring(position, position + length);
}



function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  var newString = "";
  for (var i = word.length - 1; i >= 0; i--) {
    newString += word[i];
  }
  return newString;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
  var wordss = [];
  wordss = words.match(/\S+/g);
  var result = "";
  for (var i = 0; i < wordss.length; i++) {
    result += wordss[i].split('').reverse().join('') + " ";
  }
  return result;
}


function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
  let counter = 0;
  for (const obj of users) {
    if (obj.type === "Linux") counter++;
  }
  return counter;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
  var sum = 0;

  for (var i = 0; i < scores.length; i++) {
    sum = sum + scores[i];

  }
  return Math.round((sum / scores.length) * 100.0) / 100.0

}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
  var a;
  if (n % 3 == 0 && n % 5 != 0) {
    a = "fizz";
  } else if (n % 5 == 0 && n % 3 != 0) {
    a = "buzz";
  } else if (n % 3 != 0 && n % 5 != 0) {
    a = n;
  } else if (n % 3 == 0 && n % 5 == 0) {
    a = "fizzbuzz";
  }
  return a;
}




module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
