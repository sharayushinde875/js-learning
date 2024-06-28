const employeeJSON = `{


"name": "Aleix Melon",

"id": "E00245",

"role" :["Dev","DBA"],

"age" :23,

"doj": "11-12-2019",

"isMarried": false,

"address": {

    "street": "32,Laham St.",

    "city": "Innsbruck",

    "country": "Austria"

},

"referred-by" :"E0012"


}`

console.log(employeeJSON);





const employee = JSON.parse(employeeJSON);

console.log(employee.role);

console.log("Joining Year of employee:- ",employee.doj);