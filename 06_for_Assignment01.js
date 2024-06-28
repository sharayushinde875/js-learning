console.log("============ WAP to print numbers from 5 to 15 by incrementing 1 =============");

for(let index=5;index<=15;index++)
    {
        console.log(index);
    }

 console.log("============ WAP to print numbers from 50 to 40 by decrementing 1 =============");

     for(let i=50; i>=40; i--)
        {
            console.log(i);
        }
 console.log("============ WAP to find first 15 odd numbers =============");

        for(let i=1;i<=29; i=i+2)
           {
               console.log(i);
           }
console.log("============ WAP to find first 10 even numbers =============");

           for(let i=2;i<=20; i=i+2)
              {
                  console.log(i);
              }
 console.log("============ WAP to print table of 5 =============");

              for(let i=5;i<=50; i=i+5)
                 {
                     console.log(i);
                 }
  console.log("============ WAP to print table of 10 =============");

                 for(let i=10;i<=100; i=i+10)
                    {
                        console.log(i);
                    }
                                    
   console.log("============ WAP to print table of 10 in reverse order  =============");

// Program to print the table of 10 in reverse order using a for loop

// Define the number for which we want to print the table
const number = 10;

// Iterate through numbers from 10 to 1 in reverse order
for (let i = number; i >= 0; i--) {
    // Multiply the number by the current value of i and print the result
    console.log(number  + (number * i));
}
