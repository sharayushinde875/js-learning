const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];

arrayNumbers.forEach((index) =>
    {
        console.log("Element of index  ",index);
    

    });

   
    console.log(`======= Positive Number =========`);

    const newArray=arrayNumbers.forEach( (element) => {
     if(element>0)

console.log("Positive Number of given array :- ",element);

} );

console.log(`======= Negative Number =========`);

    const newArray1=arrayNumbers.forEach( (element) => {
     if(element<0)

console.log("Negative Number of given array :- ",element);

} );

console.log(`======= Even Number =========`);

    const newArray2=arrayNumbers.forEach( (element) => {
     if(element%2==0)

console.log("Even Number of given array :- ",element);

} );

console.log(`======= Sum of  Number =========`);
    let sum=0;
    const newArray3=arrayNumbers.forEach( (element) => {
        sum = sum + element;
        } );

console.log("sum of all elements :- ",sum);


console.log(`======= Even Indexed array  =========`);
    let index;
    const newArray4=arrayNumbers.forEach( (element) => {
     if(index %2==0)

console.log("Even indexed array :- ",element);

} );


