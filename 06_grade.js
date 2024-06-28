function gradeCalculation(marks)
{
  var typeOf=typeof marks;
  // coding for Invalid  marks
  if(marks<=0 || marks>100 || marks==undefined || typeOf!= "number")
    {
       console.log("Invalid marks",marks) ;
    }
    else{
        //coding for valid marks
        if(marks>=90)
            {
                console.log("Fantastic marks :- "+marks,"Your grade is A+") ;
            }
            
            if(marks>=50 && marks<=75)
                {
                console.log("Good marks",marks,"Your grade is B") ;
                }
                if(marks>=35 && marks<=50)
                    {
                    console.log(" marks  is ",marks,"Your grade is C,Need Improvement") ;
                    }
    }
} 
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("eighty");
gradeCalculation(undefined);
gradeCalculation(null);

