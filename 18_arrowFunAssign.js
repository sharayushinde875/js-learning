
console.log("================================  step 1  ============================================")




let show =( ) =>
    {

    console.log("Good Morning ,Today is Friday");
}
show();

console.log("================================  step 2   ============================================")



let multiply= (n1,n2,n3=1)=>
    {
       const result= n1*n2*n3;
       console.log("Multiplication of given number is:- ",result);
    }

    multiply(5,5,2);
    multiply(10,4);

    console.log("============================   step 3  ============================================")

      
    
    let add=(n1,n2,n3,n4,n5)=>
        {
            const result=n1+n2+n3+n4+n5;
            console.log("Addition of given number is:-",result);
        }
       add(100,100,200,349,756);
       add("I am", " learning", " Es6", " features", " in depth");