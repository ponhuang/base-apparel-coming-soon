// regex Email
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// ^ this symbol represents beginning of input
//  \w  this means any upperCase character, lowerCase character, number or underscore
//  +   means: one or more characters
// ([\.-]?\w)  means, a dot '.' or hyphen '- '.  ('?' means: but there must be a character after it)
//  *   means: zero or more combinations of ([\.-]?\w)
// @\w+  means: @ and one or more characters after it
// (\.\w{2,3})+$  this means at the end, there must be a dot, then, 2-3 characters like .com, .eg, uk or .net
// $ this represents end of the input

const form = document.querySelector("form");
const email = document.querySelector(".email");
const errorMessage = document.querySelector(".notification");
const errorIcon = document.querySelector(".icon");

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
