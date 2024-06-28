//console.log("===== Main heading =======");

      const mainHeading = document.querySelector("h1");
      console.log(mainHeading);

     // console.log("===== Accessing 2nd li element =======");
      const secondAdvantage = document.querySelectorAll("#lielement");
      for (const element of secondAdvantage) {
        console.log(element.innerHTML);
      }

     // console.log("===== Advantages =======");
      const addDiv = document.querySelectorAll("li");
      console.log(addDiv);
      for (const element of addDiv) {
        console.log(element.innerHTML);
      }