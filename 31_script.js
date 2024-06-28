console.log(`Deprecated DOM API`);

const headingElement = document.getElementById("heading");

console.log(headingElement);

console.log(`New DOM API`);

console.log(`===== Query Selector with element name=======`);

const elementH2 = document.querySelector("h2");

console.log(elementH2);

 

console.log(`===== Query Selector with id=======`);

const elementH2ByID = document.querySelector("#heading");

console.log(elementH2);

console.log(elementH2.innerHTML);

 

console.log(`===== Query Selector with class=======`);

const elementLearning = document.querySelector(".learning");

console.log(elementLearning);

console.log(elementLearning.innerHTML);

console.log(`======= Modifying element using QuerySelector ========`);

const elementH2Heading = document.querySelector("h2");

elementH2Heading.innerHTML = "Introduction of Dom - Document Object Model";



console.log(`===== Query Selector ALL with element name =======`);

const liElements = document.querySelectorAll("li");

console.log(liElements);

for (const element of liElements) {

    console.log(element.innerHTML);

}

 

console.log(`===== Query Selector ALL with class name =======`);

const learningElements = document.querySelectorAll(".learning");

for (const element of learningElements) {

    console.log(element.innerHTML);

}

console.log(`===== Changing an attribute =======`);

const linkGoogleEle = document.querySelector("#linkGoogle");

linkGoogleEle.setAttribute("href", "https://www.google.com/");

