//test array
//let test = "45 78 98 83 86 99 90 59";
//let test ="";

function parseScores(scoresString) {
   // TODO: Compete the function

   //create an array after splitting the string
   let scoresArray = [];
   scoresArray = scoresString.split(" ");
   
   return scoresArray;
}

function buildDistributionArray(scoresArray) {
   // TODO: Compete the function

   //declare variables
   let scoreArr = scoresArray;
   let countArr = [0, 0, 0, 0, 0]; // A, B, C, D, F
   let i;

   //count the number of each grade
   for (i = 0; i < scoreArr.length; i++) {
      
      //convert the string to an int
      scoreArr[i] = parseInt(scoreArr[i]);

      if (scoreArr[i] >= 90) {
         countArr[0]++; // A
      } else if (scoreArr[i] >= 80) {
         countArr[1]++; // B
      } else if (scoreArr[i] >= 70) {
         countArr[2]++; // C
      } else if (scoreArr[i] >= 60) {
         countArr[3]++; // D
      } else if (scoreArr[i] < 60){
         countArr[4]++; // F
      }
   }
   console.log(countArr);

   return countArr;
}

function setTableContent(userInput) {
   // TODO: Compete the function

   //declare variables
   let scoresArray = parseScores(userInput);
   let countArr = buildDistributionArray(scoresArray);
   let table = document.getElementById("firstRow");
   let count = document.getElementById("thirdRow");
   table.innerHTML = "";
   count.innerHTML = "";

   //set the table content


   for (let i = 0; i < countArr.length; i++) {
      //create a td
      let td = document.createElement("td");

      //create a div to put inside the td
      let bar = document.createElement("div");


      td.innerHTML = "";
      //set the height of the bar and class
      bar.style.height = countArr[i] * 10 + "px";     
      bar.setAttribute("class", "bar" + (i) );

      //append the bar to the td and the td to the table
      td.appendChild(bar);
      table.appendChild(td);

      //set the count
      let countTd = document.createElement("td");
      countTd.innerHTML = countArr[i];
      count.appendChild(countTd);
      
   }

}

// The argument can be changed for testing purposes
setTableContent("45 78 98 83 86 99 90 59");
