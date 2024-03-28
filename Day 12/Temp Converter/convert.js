window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // TODO: Complete the function
   //declare variables
   let convertBtn = document.getElementById("convertButton");
   let cInput = document.getElementById("cInput");
   let fInput = document.getElementById("fInput");
   let img = document.getElementById("weatherImage");
   let error = document.getElementById("errorMessage");

   //clears input fields
   cInput.addEventListener("input", function() {
      if (cInput.value.length > 0) {
         fInput.value = "";
      }
   });

   fInput.addEventListener("input", function() {
      if (fInput.value.length > 0) {
         cInput.value = "";
      }
   });

   convertBtn.addEventListener("click", function() {
      //converts celsius to fahrenheit and check for errors
      if (cInput.value) {
         fInput.value = parseFloat(convertCtoF(cInput.value));
         if (isNaN(cInput.value)) {
            error.textContent = cInput.value + " is not a number";
         } else {
            error.textContent = "";
         }
      } else {
         cInput.value = parseFloat(convertFtoC(fInput.value));
         if (isNaN(fInput.value)) {
            error.textContent = fInput.value + " is not a number";
         } else {
            error.textContent = "";
         }
      }

      //set img
      if(fInput.value  < 32) {
         img.src = "cold.png";
      } else if (fInput.value >= 32 && fInput.value <= 50) {
         img.src = "cool.png";
      } else if (fInput.value > 50) {
         img.src = "warm.png";
      }

   });

}

function convertCtoF(degreesCelsius) {
   // TODO: Complete the function
   return degreesCelsius * 9 / 5 + 32;
}

function convertFtoC(degreesFahrenheit) {
   // TODO: Complete the function
   return (degreesFahrenheit - 32) * 5 / 9;
}
