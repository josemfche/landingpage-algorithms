const filterByValue = (arr, key) => {
  return arr.filter((obj) => key in obj);
};

const find = (arr, searchValue) => {
  for (const i of arr) {
    if (i === searchValue) {
      return i;
    }
  }
  return undefined;
};

const findInObj = (arr, key, searchValue) => {
  const arrFiltered = arr.filter((obj) => key in obj);

  for (const obj1 of arrFiltered) {
    if (obj1[key] === searchValue) {
      return obj1;
    }
  }
  return "There is no coincidence";
};

const removeVowels = (str) => {
  const strLowerCase = str.toLowerCase();
  const vowels = { a: true, e: true, i: true, o: true, u: true };
  let newStr = "";
  for (let letter of strLowerCase) {
    if (!vowels[letter]) {
      newStr += letter;
    }
  }
  return newStr;
};

const doubleOddNumbers = (arr) => {
  return arr.filter((num) => num % 2 != 0).map((num) => num * 2);
};

/* Revisar el enunciado */
/* const extractKey = (arr, key) => {
  return arr.filter((obj) => obj.hasOwnProperty(key)).map((obj) => obj[key]);
}; */

const extractValue = (arr, key) => {
  return arr.filter((obj) => obj.hasOwnProperty(key)).map((obj) => obj[key]);
};

const vowelCount = (str) => {
  let vowels = { a: true, e: true, i: true, o: true, u: true, A: true, E: true, I: true, O: true, U: true };
  let result = {};

  for (const letter of str) {
    if (vowels[letter]) {
      let letterLowerCased = letter.toLowerCase();
      result[letter] === undefined ? (result[letterLowerCased] = 1) : (result[letterLowerCased] += 1);
    }
  }

  return result;
};

const hasNoDuplicates = (arr) => {
  for (let i in arr) {
    for (let j in arr) {
      if (i != j && arr[i] == arr[j]) {
        return false;
      }
    }
  }
  return true;
};

const addKeyAndValue = (arr, key, value) => {
  return arr.map((item) => {
    return { [key]: value, ...item };
  });
};

const partition = (arr, callback) => {
  let arrTrue = [];
  let arrFalse = [];

  arr.map((elem) => {
    callback(elem) ? arrTrue.push(elem) : arrFalse.push(elem);
  });

  return [arrTrue, arrFalse];
};

const hasCertainKey = (arr, key) => {
  for (let obj of arr) {
    if (!obj.hasOwnProperty(key)) return false;
  }
  return true;
};

module.exports = {
  filterByValue,
  find,
  findInObj,
  removeVowels,
  doubleOddNumbers,
  /*   extractKey, */
  extractValue,
  vowelCount,
  hasNoDuplicates,
  addKeyAndValue,
  partition,
  hasCertainKey,
};
