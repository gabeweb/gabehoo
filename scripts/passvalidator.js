// original code provided by:
// w3collective
// https://w3collective.com/password-strength-javascript/
// https://github.com/w3collective/password-strength-javascript
// under a MIT License

const pwd = document.getElementById("password-input");
const pwdStrength = document.getElementById("password-strength");

pwd.addEventListener("input", function () {
  const pwdVal = pwd.value;
  let result = zxcvbn(pwdVal);
  if (pwdVal === "") {
    pwdStrength.className = "strength-null";
  } else {
    pwdStrength.className = "strength-" + result.score;
  }
});

const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password-input");

togglePassword.addEventListener("click", function (e) {
  // toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  // toggle the eye slash icon
  this.classList.toggle("visibility_off");
});

var counter = document.getElementById("char-counter"),
  input = document.getElementById("password-input");

counter.innerHTML = input.value.length;

input.addEventListener("input", function (e) {
  counter.innerHTML = input.value.length;
});
