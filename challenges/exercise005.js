const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  var nextNumb;
  var idx = nums.indexOf(n);
  console.log("TESTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT" + n + "" + idx);
  for (var i = 0; i <= nums.length; i++) {
    if (nums[idx + 1] == -1) {

      nextNumb = null;
    } else if (nums[idx] == nums.length) {
      nextNumb = null;
    } else {
      nextNumb = [idx + 1]
    }
    //const functionToFilterNumbers = function(nums){
    //  return nums[i+1];


    // last position null
    // not in array = null; 

  }
  return nextNumb;
}



const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  var prop0 = (str.match(/0/g) || []).length;
  var prop1 = (str.match(/1/g) || []).length;
  var obj = {
    0: prop0,
    1: prop1
  }

  return obj;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  return parseFloat(n.toString().split('').reverse().join('')) * Math.sign(n);
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!

};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  //arr.reverse();
  var start = arr[0];
  var end = arr[arr.length];
  var newA = arr;
  newA[0] = end;
  newA[-1] = start;
  return newA;


};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
