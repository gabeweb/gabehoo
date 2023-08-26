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