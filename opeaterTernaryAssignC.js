console.log("==============================  step 1  =============================");


function maleMarriageEligibility(gender, age, boyName) {
    return (gender == "Male" && age >= 21) 
        ? ` Hey ${boyName} you are eligible for Marriage` 
        : `${boyName} you are not eligible for Marriage - `;
}

console.log(maleMarriageEligibility("Male", 25, "Billgates"));
console.log(maleMarriageEligibility("Male", 17, "Stew Jobs"));  

console.log("================================ step 2  =============================");


function femaleMarriageEligibility(gender, age, girlName) {
    return (gender == "Female" && age >= 18) 
        ? ` Hey ${girlName}you are eligible for Marriage`
        : `${girlName} you are not eligible for Marriage - `;
}


console.log(femaleMarriageEligibility("Female", 16, "Jenifer"));
console.log(femaleMarriageEligibility("Female", 27, "Malinda Gates"));
