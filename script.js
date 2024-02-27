const form = document.querySelector("form");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");
const passwordError = document.querySelector(".error");

passwordConfirm.addEventListener("input", () => {
  console.log("input event fired");
  showError();
});

form.addEventListener("submit", (event) => {
  if (password.value !== passwordConfirm.value) {
    console.log("Form not submitted!");
    event.preventDefault();
  } else {
    console.log("Form submitted!");
    passwordError.style.display = "none";
  }
});

const showError = () => {
  if (password.value !== passwordConfirm.value) {
    console.log("Passwords do not match!");
    passwordError.style.display = "visible";
    passwordError.style.color = "red";
    passwordError.textContent = "* Passwords do not match!";
  } else {
    console.log("Passwords matches!");
    passwordError.style.color = "green";
    passwordError.textContent = "Passwords matches!";
  }
};
