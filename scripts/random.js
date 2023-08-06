const lengthSlider = document.querySelector(".pass-length input"),
  options = document.querySelectorAll(".option input"),
  copyIcon = document.querySelector(".input-box span"),
  passwordInput = document.querySelector(".input-box div"),
  passIndicator = document.querySelector(".pass-indicator"),
  generateBtn = document.querySelector(".generate-btn"),
  characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "-!#$%&*./:?@_+=",
  },
  generatePassword = () => {
    let e = "",
      t = "",
      n = lengthSlider.value;
    options.forEach((t) => {
      t.checked && (e += characters[t.id]);
    });
    var r = new Uint32Array(1);
    for (let o = 0; o < n; o++) {
      crypto.getRandomValues(r);
      let n = r[0] % e.length;
      t += e[n];
    }
    passwordInput.innerHTML = t;
  },
  upadatePassIndicator = () => {
    passIndicator.id =
      lengthSlider.value <= 8
        ? "weak"
        : lengthSlider.value <= 16
          ? "medium"
          : "strong";
  },
  updateSlider = () => {
    (document.querySelector(".pass-length span").innerText =
      lengthSlider.value),
      generatePassword(),
      (passIndicator.id =
        lengthSlider.value <= 8
          ? "weak"
          : lengthSlider.value <= 16
            ? "medium"
            : "strong");
  };
updateSlider();
const copyPassword = () => {
  navigator.clipboard.writeText(passwordInput.innerHTML),
    (copyIcon.innerText = "check"),
    (copyIcon.style.color = "var(--indigo)"),
    setTimeout(() => {
      (copyIcon.innerText = "copy"), (copyIcon.style.color = "var(--orange)");
    }, 1500);
};
copyIcon.addEventListener("click", copyPassword),
  lengthSlider.addEventListener("input", updateSlider),
  generateBtn.addEventListener("click", generatePassword);
