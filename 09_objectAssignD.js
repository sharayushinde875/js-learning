console.log( "========================================= step 1 ====================================");
const professor={

Name: "Sharayu Shinde",
Age: 28,
isMarried: true,
Mobilenumber:9284056105,
Department:"Computer Science",
Certificate:["Certification in IFE course","Hacker Rank Participation","quize participation"],
degree:{
    engineering:"CSC",
    PHD:"Adv Computing",
    BBA:"Bachlor of Business Administration",
    Diploma:"Digital Marketing"
   },
};
   console.log(professor);


   console.log("======================================== step 2====================================");
   console.log("degree ", professor.degree);


   console.log("======================================== step 3 ====================================");
  console.log("certificate ", professor.Certificate);

    
  console.log("========================================  step 4======================================");
  professor.totalExperience=14;

  console.log(professor);

  console.log("========================================  step 5 ====================================");
  professor.Department="IT";
  console.log(professor);


   console.log("======================================== step 6 ====================================");

    professor.Certificate[2]="Oracle certificate";
    console.log(" updated cerificate is ",professor.Certificate);


    console.log("======================================== step 7 ====================================");

    
    console.log(" last element of  cerificate array is ",professor.Certificate[2]);
    
          
    console.log("======================================== step 8 ====================================");
 
    console.log(professor);


