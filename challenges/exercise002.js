function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!


  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  if (person.city == "Manchester") {
    return true;
  }
  return false;
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here

  return Math.ceil(people / 40);
}

// STUDY THIS
function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  let count = arr.reduce(function (n, val) {
    return n + (val === "sheep");
  }, 0);
  return count;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  let ans = true;
  let post = person.address.postCode;
  let city = person.address.city;

  if (post.charAt(0) == "M" && city != "Manchester") {
    ans = false;
  } else if (post.charAt(0) == "M") {
    ans = true;
  } else if (post.charAt(0) != "M") {
    ans = false;
  }
  return ans;
}


module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};


