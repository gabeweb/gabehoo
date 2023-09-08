// Password Generator code adapted from
// CodingNepal
// https://www.codingnepalweb.com/random-password-generator-html-javascript/

const lengthSlider = document.querySelector(".pass-length input"),
  options = document.querySelectorAll(".option input"),
  copyIcon = document.querySelector(".password-box span"),
  passwordInput = document.querySelector(".password-box div"),
  passIndicator = document.querySelector(".pass-indicator"),
  generateBtn = document.querySelector(".generate-btn");

const characters = {
  // object of letters, numbers & symbols
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!#$%&*+-./:=?@_",
};

const generatePassword = () => {
  let staticPassword = "",
    randomPassword = "",
    passLength = lengthSlider.value;

  options.forEach((option) => {
    // looping through each option's checkbox
    if (option.checked) {
      staticPassword += characters[option.id];
    }
  });

  var array = new Uint32Array(1); // create an array of one element
  for (let i = 0; i < passLength; i++) {
    crypto.getRandomValues(array); // fill the array with a random number
    let randomIndex = array[0] % staticPassword.length; // get the index of the character
    let randomChar = staticPassword[randomIndex]; // get the character
    randomPassword += randomChar;
  }
  passwordInput.innerHTML = randomPassword;
};

const upadatePassIndicator = () => {
  // if lengthSlider value is less than 8 then pass "weak" as passIndicator id else if lengthSlider
  // value is less than 16 then pass "medium" as id else pass "strong" as id
  passIndicator.id =
    lengthSlider.value <= 5
      ? "veryweak"
      : lengthSlider.value >= 6 && lengthSlider.value <= 10
      ? "weak"
      : lengthSlider.value >= 11 && lengthSlider.value <= 15
      ? "good"
      : "strong";
};

const updateSlider = () => {
  // passing slider value as counter text
  document.querySelector(".pass-length span").innerText = lengthSlider.value;
  generatePassword();
  upadatePassIndicator();
};
updateSlider();

const copyPassword = () => {
  navigator.clipboard.writeText(passwordInput.textContent); // copying random password
  copyIcon.innerText = "check"; // changing copy icon to tick
  copyIcon.style.color = "var(--indigo)";
  setTimeout(() => {
    // after 1500 ms, changing tick icon back to copy
    copyIcon.innerText = "copy";
    copyIcon.style.color = "var(--orange)";
  }, 1500);
};

copyIcon.addEventListener("click", copyPassword);
lengthSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", generatePassword);
