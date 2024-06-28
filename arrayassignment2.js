const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log("arrayNumbers:");
console.log(arrayNumbers);

console.log("============================= 1. Find the total elements available or length and log on console======================");
console.log(arrayNumbers.length);

console.log();

console.log("=============================== 2.Log the first element and last element in arrayNumbers and log on console==========");
console.log(arrayNumbers[0]);
console.log(arrayNumbers[arrayNumbers.length - 1]);

console.log();

console.log("=============================== 3. Log the third last element using length property and log on console===================");
console.log(arrayNumbers[arrayNumbers.length - 3]);

console.log();

console.log("=============================== 4. Find all the even numbers using for loop and log on console=============================");
const evenNumbers = [];
for (let i = 0; i < arrayNumbers.length; i++) {
  if (arrayNumbers[i] % 2 === 0) {
    evenNumbers.push(arrayNumbers[i]);
  }
}
console.log(evenNumbers);

console.log();

console.log("=============================  5. Find the odd numbers using for loop and log on console===================================");
const oddNumbers = [];
for (let i = 0; i < arrayNumbers.length; i++) {
  if (arrayNumbers[i] % 2 !== 0) {
    oddNumbers.push(arrayNumbers[i]);
  }
}
console.log(oddNumbers);

console.log();

console.log("============================  6.Find all the even positioned elements from arrayNumbers, sum it and log on console============");
let evenPositionSum = 0;
for (let i = 0; i < arrayNumbers.length; i++) {
  if (i % 2 === 0) {
    evenPositionSum += arrayNumbers[i];
  }
}
console.log(evenPositionSum);

console.log();

console.log("===========================  7.Find all the odd positioned elements from arrayNumbers, sum it and log on console==============");
let oddPositionSum = 0;
for (let i = 0; i < arrayNumbers.length; i++) {
  if (i % 2 !== 0) {
    oddPositionSum += arrayNumbers[i];
  }
}
console.log(oddPositionSum);

console.log();

console.log("============================ =8. Find the sum of all elements from arrayNumbers, log on console=========================");
let totalSum = 0;
for (let i = 0; i < arrayNumbers.length; i++) {
  totalSum += arrayNumbers[i];
}
console.log(totalSum);

console.log();

console.log("============================== 9. Find the numbers which are multiple of 5==============================");
const multiplesOfFive = [];
for (let i = 0; i < arrayNumbers.length; i++) {
  if (arrayNumbers[i] % 5 === 0) {
    multiplesOfFive.push(arrayNumbers[i]);
  }
}
console.log(multiplesOfFive);

console.log();

console.log("=============================== 10. Is number 115 available in arrayNumbers========================");
console.log(arrayNumbers.includes(115));

console.log();

console.log("=============================== 11. Is number 23 available in arrayNumbers=================================");
console.log(arrayNumbers.includes(23));

console.log();

console.log("=============================== 12. Insert numbers → 55, 66 at index 3 and log array on console============================");
arrayNumbers.splice(3, 0, 55, 66);
console.log(arrayNumbers);

console.log();

console.log("================================ 13. Delete 3 elements starting from index 4 and log arrayNumbers on console===============");
arrayNumbers.splice(4, 3);
console.log(arrayNumbers);
