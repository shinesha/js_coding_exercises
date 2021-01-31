function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const result = nums.filter(num => num < 1);
  return result;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  const result = names.filter(name=> name.charAt(0) == char);
return result;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  const result = words.filter(word=> word.substring(0,3) == "to ");
  
  return result;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const result= nums.filter(num=> num % parseInt(num) == 0);
return result;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  //const result= users.filter(user=> users.data.city.displayName);
  let result = users.map(a => a.data.city.displayName);
  return result;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  var result =[];
  for(var i = 0; i < nums.length ; i++){
    result[i] =  Math.round((Math.sqrt(nums[i]))*100.0)/100.0;
  }
  return result;
}


function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  //if (sentences.includes(str)){
    var sentences1 = sentences.toString();
    const sentenceArray = sentences1.replace(/([,])\s*(?=[A-Z])/g, "$1|").split("|")

    // Filter our array by checking if each sentence includes the word, then immedietly returns it
    return sentenceArray.filter(sentence => sentence.includes(str))
  }



function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  
  var arr = [];
  // This loop is for outer array
  for (var i = 0, l1 = triangles.length; i < l1; i++) {

  // This loop is for inner-arrays
    for (var j = 0, l2 = triangles[i].length; j < l2; j++) {

      arr.push(Math.max(triangles[i]));
      console.log(arr);
      // Accessing each elements of inner-array
  
  }
  return arr;
}
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
