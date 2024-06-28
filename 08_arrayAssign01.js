const fruits_seasonal=["Banana","Orange","Apple","Mango","Water_melon"];
console.log("fruits Names are- ",fruits_seasonal);

var len=fruits_seasonal.length
console.log("length of array is-",len);

index=len-1;
console.log( "index of array- ",index);

console.log("=================================================step 1================================================");

console.log( "First element of array- ",fruits_seasonal[0]);
console.log( "Last element of array- ",fruits_seasonal[4]);

console.log("================================================step 2 =================================================");

fruits_seasonal.unshift("papaya");
console.log(" Updated fruits Names are- ",fruits_seasonal);

console.log("=================================================step 3 =========================================================");

fruits_seasonal.push("pineapple");
console.log(" Updated fruits Names are- ",fruits_seasonal);




