function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code he
  let arra=[];
  for (let i = 0; i < nums.length; i++){
      arra.push(nums[i]**2)
  }
  return arra;
}

//Study this. 
function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  let out = "";
  words.forEach(function (el, idx) {
      let add = el.toLowerCase();
      out += (idx === 0 ? add : add[0].toUpperCase() + add.slice(1));
  });
  return out;
}



function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  let sum = 0;
  for (const obj of people) {
      sum = sum + obj.subjects.length;
    }
    return sum;
}



function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
  if (menu.some(men => men.ingredients == ingredient)){
    return true;
  }
  return false;
}
  

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
  let last = arr1.concat(arr2);
  
  let unique=[];
  last.forEach(element => {
    if (!unique.includes(element)) {
      unique.push(element)
    }
  })
  
  unique.sort((a, b)=>a-b);{
    //console.log(unique)
    return unique;
  };

}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
