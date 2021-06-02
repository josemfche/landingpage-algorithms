const utilityfuctions = require("./algoritmos");

let filterByValue = utilityfuctions.filterByValue(
  [
    { first: "Elie", last: "Schoppik" },
    { first: "Tim", last: "Garcia", isCatOwner: true },
    { first: "Matt", last: "Lane" },
    { first: "Colt", last: "Steele", isCatOwner: true },
  ],
  "isCatOwner"
);

let find = utilityfuctions.find([1, 2, 3, 4, 3], 3);

let findInObj = utilityfuctions.findInObj(
  [
    { first: "Elie", last: "Schoppik" },
    { first: "Tim", last: "Garcia", isCatOwner: true },
    { first: "Matt", last: "Lane" },
    { first: "Colt", last: "Steele", isCatOwner: true },
  ],
  "isCatOwner",
  true
);

let removeVowels = utilityfuctions.removeVowels("ZZZZZZ");

let doubleOddNumbers = utilityfuctions.doubleOddNumbers([4, 7, 4, 4, 4]);

/* let extractKey = utilityfuctions.extractKey([{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }], "name"); */

let extractValue = utilityfuctions.extractValue([{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }], "name");

let vowelCount = utilityfuctions.vowelCount("I Am awesome and so are you");

let hasNoDuplicates = utilityfuctions.hasNoDuplicates([1, 2, 3, 4, 5, 6]);

let addKeyAndValue = utilityfuctions.addKeyAndValue([{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }], "title", "Instructor");

function isLongerThanThreeCharacters(val) {
  return val.length > 3;
}

let partition = utilityfuctions.partition(["Elie", "Colt", "Tim", "Matt"], isLongerThanThreeCharacters);

var arr = [
  { title: "Instructor", first: "Elie", last: "Schoppik" },
  { title: "Instructor", first: "Tim", last: "Garcia", isCatOwner: true },
  { title: "Instructor", first: "Matt", last: "Lane" },
  { title: "Instructor", first: "Colt", last: "Steele", isCatOwner: true },
];

let hasCertainKey = utilityfuctions.hasCertainKey(arr, "isCatOwner");

console.log("filterByValue :", filterByValue);

console.log("find :", find);

console.log("findInObj: ", findInObj);

console.log("removeVowels ", removeVowels);

console.log("doubleOddNumbers: ", doubleOddNumbers);

/* console.log("extractKey: REVISAR ENUNCIADO", extractKey); */

console.log("extractValue: ", extractValue);

console.log("vowelCount: ", vowelCount);

console.log("hasNoDuplicates: ", hasNoDuplicates);

console.log("addKeyAndValue: ", addKeyAndValue);

console.log("partition: ", partition);

console.log("hasCertainKey: ", hasCertainKey);
