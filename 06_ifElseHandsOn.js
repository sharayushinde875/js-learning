console.log("=====================step 1===========================")
function  ifElse(num)
{
 if(num%2==0)
    {
        console.log("Given number is even number:-", num);
    }
    else{
        console.log("Given number is odd number:-", num)
    }
}
ifElse(45);
ifElse(70);
ifElse(67);
ifElse(98);

console.log("=====================step 2 ==========================")

function  vote(num)
{
 if(num>=18)
    {
        console.log("Eligible for vote", num);
    }
    else{
        console.log("Not eligible for vote", num)
    }
}
vote(18);
vote(20);
vote(17);
vote(40);

console.log("=====================step 3 ==========================")


var strLength=function(str)
{
    if(str.length>=10)
        {
            console.log("Given string contain more than 10 character:- ",str);
        }
        else{
            console.log("Given string does not contain more than 10 character:- ",str);
        }
}
strLength("javascript");



console.log("=====================step 4 ==========================")

var strLength=function(str)
{
    if(str.startsWith("java"))
        {
            console.log(`Given string  ${str} starts with java`);
        }
        else{
            console.log(`Given string  ${str} does not starts with java`);
           
        }
}
strLength("javascript");
strLength("programming Language");
