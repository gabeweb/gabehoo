function generatePasswords() {
  var length = document.getElementById("lengthNumber").value;
  var count = document.getElementById("countNumber").value;
  var passwordsDiv = document.querySelector("#passwords ol");
  passwordsDiv.innerHTML = ""; // Clear previous passwords

  for (var i = 0; i < count; i++) {
    var password = generatePassword(length);
    var passwordElement = document.createElement("li");
    passwordElement.textContent = password;
    passwordsDiv.appendChild(passwordElement);
  }
}

function generatePassword(length) {
  var buf = new Uint8Array(length);
  window.crypto.getRandomValues(buf);
  var charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&*+-./:=?@_";
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = buf[i] % charset.length;
    password += charset[randomIndex];
  }
  return password;
}
