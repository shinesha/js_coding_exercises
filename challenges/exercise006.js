/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 == 0 || arr[i] % 5 == 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
};

/**
 * This function will receive a string of characters and should return true/false depending on
 * whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = (str) => {
  if (str === undefined) throw new Error("str is required");

  if (
    str.includes("C") ||
    str.includes("G") ||
    str.includes("T") ||
    str.includes("A")
  ) {
    return true;
  }
  return false;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the
 * complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of
 * "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */

// Come back to this
const getComplementaryDNA = (str) => {
  if (str === undefined) throw new Error("str is required");

  for (l = 0; l < str.length; l++) {
    if (str[l] != "A" && str[l] != "C" && str[l] != "T" && str[l] != "G") {
      return "invalid string";
    } else
      str.replace(/A/g, "T") &&
        str.replace(/T/g, "A") &&
        str.replace(/C/g, "G") &&
        str.replace(/G/g, "C");
  }
  console.log("YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY" + str);
  return str;
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = (n) => {
  if (n === undefined) throw new Error("n is required");

  for (let i = 2, s = Math.sqrt(n); i <= s; i++) if (n % i === 0) return false;

  return true;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items.
 * The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo"
 * the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");

  return Array(n)
    .fill()
    .map(() => Array(n).fill(fill));
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day.
 * The function should return true/false depending on whether there are
 * enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");

  let count =0;

  for (let i = 0; i< staff.length; i++){
    for (let j=0; j<staff[i].rota[j].length; j++)
    if (staff[i].rota == day){
      count = count +1;
    }
  if (count >=3){
    return true;
  }
  return false;
  }


};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
};
