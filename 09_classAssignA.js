console.log("========================================= step 1 =====================================================");
class Vehicle {

    // Data Members Or Properties or Attributes or States

    constructor(Name,color,speed,year){

        this.Name = Name;

        this.color = color;

        this.speed=speed;

        this.year=year;


    }

 

    //Member Function or Methods or Behavior or Actions

    details(){

        console.log(`Details: ${this.Name}, ${this.color},${this.speed},${this.year}`);

    }

}

const Tata = new Vehicle("Tata Nexon", "red", 15000, 2017);

Tata.details();

console.log();


const  XUV = new Vehicle("Mahindra XUV", "black", 25000, 2021);

 XUV.details();



const Maruti  = new Vehicle("Maruti suzuki", "white", 15000, 2017);

Maruti.details();


const Ferrari = new Vehicle("Ferrari", "black", 10000, 1937);

Ferrari.details();



console.log("========================================= step 2 =====================================================");
class College
{
    constructor(CollegeName,Location,EstablishedYear,Noofstudent){

        this.CollegeName =CollegeName;

        this.Location =Location;

        this.EstablishedYear=stablishedYear;

        this.Noofstudent=Noofstudent;

}
details(){

    console.log(`Details: ${this.CollegeName}, ${this.Location},${this.EstablishedYear},${this.Noofstudent}`);
}
}

const kwccollege = new Vehicle("kwc college", "sangli", 1995, 2500);

kwccollege.details();

console.log();


const  lntcollege = new Vehicle("L N T college", "kolhapur", 1975, 2020);

lntcollege.details();

const  Rskcollege = new Vehicle("Rani saraswati college", "Nashik", 1985, 3020);

Rskcollege.details();

const  Garawarecollege = new Vehicle("Garaware  college", "Pune", 1965, 5020);

Garawarecollege.details();



