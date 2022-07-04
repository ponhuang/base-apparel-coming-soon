const btnToggle = document.querySelector(".btn");

function validateEmail(input) {
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (input.value.match(mailFormat)) {
    alert("yeah! a valid email");
    document.emailAdress.focus();
    return true;
  } else {
    document.querySelector(".notification").classList.remove(hidden);

    document.querySelector("form .icon").classList.remove(hidden);
  }
}
