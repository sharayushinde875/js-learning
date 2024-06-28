console.log("================================ strep 1 ==============================================");

const arrayNumbers=[20,11,40,25,37,49,9,90,60,2,19];

const newArray = arrayNumbers.filter( (element)=>{
    return element>50;
});
console.log("Greater Numberes",newArray);


console.log("================================ strep 2 ==============================================");

//const arrayNumbers1=[20,11,40,25,337,49,9,90,60,2,19];

const newArray1 = arrayNumbers.filter( (element)=>{
    return element%2==0;
});
console.log("Even Numbers:- ",newArray1);


console.log("================================ strep 3 ==============================================");

//const arrayNumbers1=[20,11,40,25,337,49,9,90,60,2,19];

const newArray2 = arrayNumbers.filter( (element)=>{
    return element%2!=0;
});
console.log("Odd Numbers:- ",newArray2);

console.log("================================ strep 4 ==============================================");

//const arrayNumbers1=[20,11,40,25,337,49,9,90,60,2,19];

const newArray3 = arrayNumbers.filter( (element)=>{
    return element%5==0;
});
console.log("Numbers which are multiple by 5:- ",newArray3);

console.log("================================ strep 5 ==============================================");

//const arrayNumbers1=[20,11,40,25,337,49,9,90,60,2,19];

const newArray4 = arrayNumbers.filter( (element)=>{
    return  (element>=20 && element<=50);
    
});

console.log("Numbers bertwwen 20 & 50:- ",newArray4);








