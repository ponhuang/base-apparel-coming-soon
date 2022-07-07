// regex Email
// /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const form = document.querySelector("form");
const email = document.querySelector(".email");
const errorMessage = document.querySelector(".notification");
const errorIcon = document.querySelector(".icon");
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener("submit", (e) => {
  // prevent form from submitting
  e.preventDefault();
  if (email.value == "") {
    errorMessage.innerText = "Email cannot be blank";
    form.classList.add("error");
    form.classList.remove("success");
  } else if (!email.value.match(regexEmail)) {
    // if regexEmail is not matched user's enter value
    errorMessage.innerText = "Please enter a valid email";
    form.classList.add("error");
    form.classList.remove("success");
  } else {
    form.classList.add("success");
    form.classList.remove("error");
  }
});
