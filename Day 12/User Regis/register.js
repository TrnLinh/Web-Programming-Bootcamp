function checkForm() {
   // TODO: Perform input validation 

   //declare variables
   let errorCard = document.querySelector("#formErrors");
   let nameInput = document.querySelector("#fullName");
   let emailInput = document.querySelector("#email");
   let passwordInput = document.querySelector("#password");
   let confirmInput = document.querySelector("#passwordConfirm");
   let errorText = [];

   //reset errors
   errorCard.classList.add("hide");
   nameInput.classList.remove("error");
   emailInput.classList.remove("error");
   passwordInput.classList.remove("error");
   confirmInput.classList.remove("error");

   //check name
   if (nameInput.value.length < 1) {
      errorText.push("Missing full name.");
      nameInput.classList.add("error");
   }

   //check email
   if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/.test(emailInput.value)) {
      errorText.push("Invalid or missing email address.");
      emailInput.classList.add("error");
   }

   //check password
   if (passwordInput.value.length < 10 || passwordInput.value.length > 20) {
      errorText.push("Password must be between 10 and 20 characters.");
      passwordInput.classList.add("error");
   }

   //check password for lowercase character
   if (!/[a-z]/.test(passwordInput.value)) {
      errorText.push("Password must contain at least one lowercase character.");
      passwordInput.classList.add("error");
   }

   //check password for uppercase character
   if (!/[A-Z]/.test(passwordInput.value)) {
      errorText.push("Password must contain at least one uppercase character.");
      passwordInput.classList.add("error");
   }

   //check password for digit
   if (!/\d/.test(passwordInput.value)) {
      errorText.push("Password must contain at least one digit.");
      passwordInput.classList.add("error");
   }

   //check password confirm
   if (passwordInput.value !== confirmInput.value) {
      errorText.push("Password and confirmation password don't match.");
      confirmInput.classList.add("error");
   }

   //display errors
   if (errorText.length > 0) {
      errorCard.innerHTML = "<ul></ul>";
      let errorList = document.querySelector("#formErrors ul");
      errorList.innerHTML = "";

      errorText.forEach(element => {
         let item = document.createElement("li");
         item.textContent = element;
         errorList.appendChild(item);
         
      });

      errorCard.classList.remove("hide");
   }
}

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});

