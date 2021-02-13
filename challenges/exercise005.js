const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  let nextNumb;
  let idx = nums.indexOf(n);

  for (let i = 0; i <= nums.length; i++) {
    if (idx == -1) {
      nextNumb = null;
    } else if ((idx + 1) == nums.length) {
      nextNumb = null;
    } else {
      nextNumb = nums[idx + 1];
    }

  }
  return nextNumb;
}



const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");

  let prop0 = (str.match(/0/g) || []).length;
  let prop1 = (str.match(/1/g) || []).length;
  let obj = {
    0: prop0,
    1: prop1
  }

  return obj;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");

  return parseFloat(n.toString().split('').reverse().join('')) * Math.sign(n);
};


const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");




};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");

  //arr.reverse();
  let newA = [];
  for (i = 0; i < arr.length; i++) {
    newA[i] = arr[i];
    let start = arr[0];
    let end = arr[arr.length - 1];

    newA.splice(0, 1, start);
    newA.splice(length - 1, 1, end);
  }
  return newA;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  for (key in haystack[i]) {
    if (haystack[i][key].indexOf(searchTerm) != -1)
      return true;
  }
  return false;

};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");

  words = str.replace(/[.]/g, '').split(/\s/);
  freqMap = {};
  words.forEach(function (w) {
    if (!freqMap[w]) {
      freqMap[w] = 0;
    }
    freqMap[w] += 1;
  });

  return freqMap;
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
