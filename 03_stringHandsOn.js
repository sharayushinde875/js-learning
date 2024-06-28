function stringHandsOn()
{
   
    var cal="Hey you are doing good, keep it up";

    console.log("=============================   step 1 ================================================");
console.log("Hey you are doing good, keep it up");


console.log("==================================  step 2 =================================================");
console.log("length of string ",cal.length);


console.log("===================================  step 3 =================================================");

var city = "  Hey you are doing good, keep it up.....  ";
console.log(`Length before trim is: ${city.length}`);
city = city.trim();
console.log(`Length after trim is: ${city.length}`);

console.log("===================================  step 4 =================================================");

// var myName = "Gajanan Kharat";
var result = cal.split(" ");
console.log(` Total number of extra spaces removed: ${result.length}`);

console.log("===================================  step 5 ==================================================");


var result = cal.includes("up");
console.log(`Is string ends with word "up" : ${result}`);

console.log("===================================  step 6 ==================================================");
var result = cal.includes("Hey");
console.log(`Is string starts with "Hey" : ${result}`);

console.log("===================================  step 7 =================================================");

// var str="helli dev";
console.log( "substring from index 22:- " , cal.substring(22));

console.log("===================================  step 8 =================================================");

console.log("Index of the word good: " ,cal.indexOf("good"));

console.log("===================================  step 9 =================================================");
 console.log(cal.charAt(0));






}
stringHandsOn();