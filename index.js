const form = document.querySelector("#form");
const email = document.querySelector(".email");
const btnSubmit = document.querySelector(".btn-submit");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateEmail();
});

// function validateInput() {
//   // get the valus from the input
//   // trim() to remove the extra space
//   const emailValue = email.value.trim();

//   if (emailValue === "") {
//     //show error
//     // remove hidden class
//     setErrorFor(email, "Email cannot be blank");
//   } else {
//     // keep hidden class
//     setSuccessFor(email);
//   }
// }

function validateEmail(email) {
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.value.match(emailFormat)) {
    email.classList.add("success");
  } else {
    document.querySelector(".notification").classList.remove(hidden);
    document.querySelector("icon").classList.remove(hidden);
  }
}
