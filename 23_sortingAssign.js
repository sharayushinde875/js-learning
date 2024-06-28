const arrayRollNumbers=[113,45,56,11,32,45,109,799,56,45];

const reversedArray=arrayRollNumbers.reverse();
console.log("Reversed Array:-",reversedArray);

const sortedArrayDefault=arrayRollNumbers.sort();
console.log("Default sorted Array:-",sortedArrayDefault);


arrayRollNumbers.sort((n1, n2)=>{

    return n1>n2 ? 1 : -1;

});

console.log("Array in ascending using logic:- ",arrayRollNumbers);

const greatestNumber=Math.max(...arrayRollNumbers);
console.log("Greatest number:-",greatestNumber);

const smallestNumber=Math.min(...arrayRollNumbers);
console.log("smallest number:-",smallestNumber);

const duplicate=[...new Set(arrayRollNumbers)];
console.log("Removed duplicate value:-",duplicate);





