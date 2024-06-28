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

console.log("=================================================step 4 =========================================================");

fruits_seasonal.splice(4,1);
console.log(" Updated fruits Names are- ",fruits_seasonal);

console.log("=================================================step 5 =========================================================");
// const fruits_seasonal=["Banana","Orange","Apple","Mango","Water_melon"];
fruits_seasonal.splice(index,0,"dragon fruit");
console.log(" updated array of  fruits Names are- ",fruits_seasonal);

console.log("=================================================step 6 =========================================================");
fruits_seasonal.splice(index,1,"kiwi");
console.log(" updated array of  fruits Names are- ",fruits_seasonal);


// array.splice(0,"dragon fruit");
console.log("=================================================step 7 =========================================================");

console.log("array elemnts:-  ",fruits_seasonal[0],fruits_seasonal[1],fruits_seasonal[2],fruits_seasonal[3]);

console.log("=================================================step 8 =========================================================");
console.log("array elemnts:-  ",fruits_seasonal[4],fruits_seasonal[5],fruits_seasonal[6]);

