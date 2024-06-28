function stringTemplateAssign()
{
    var companyName="TCS";
    
    console.log(`My dream company is: ${companyName}`);
    var hobby1="travelling";
    var hobby2="photography";
    var hobby3="cooking";

    console.log(`My hobbies are: ${hobby1},${hobby2},${hobby3}`);

    var result = hobby1.concat(hobby2, hobby3);
     console.log(`Concat string is: ${result}`);
    
}

stringTemplateAssign();