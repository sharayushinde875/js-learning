function stringBasics()
{
    var companyName="TCS";
    console.log(`My dream company is: ${companyName}`);
    var hobby1="travelling";
    var hobby2="photography";
    var hobby3="cooking";
    console.log(`My hobbies are: ${hobby1},${hobby2},${hobby3}`);
    

    // console.log(`Find Total number of characters from the string: ${hobby1}+${hobby2}+${hobby3}`);
    var totalChar = hobby1.length+hobby2.length+hobby3.length;
     console.log(`Total number of character available in 3 hobbies are:  ${totalChar}`);

}
stringBasics();