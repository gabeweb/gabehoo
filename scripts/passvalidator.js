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
  pwdStrength.className = "strength-" + result.score;
});
