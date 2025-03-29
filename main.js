// GetStarted - A simple responsive Startpage
// Author: MrAlpha786 (github.con/MrAlpha786)

// Greeting time!
var myDate = new Date();
var hrs = myDate.getHours();

var greet;
var html = "";

if (hrs < 12)
  greet = html + '<span class="morning">' + "Good Morning!" + "</span>";
else if (hrs >= 12 && hrs <= 17)
  greet = html + '<span class="afternoon">' + "Good Afternoon!" + "</span>";
else if (hrs >= 17 && hrs <= 24)
  greet = html + '<span class="evening">' + "Good Evening!" + "</span>";

document.getElementById("greeting").innerHTML = greet;

// Botón para activar/desactivar la señal horaria
const chimeButton = document.getElementById("hourly-chime-button");
let chimeEnabled = true;

chimeButton.addEventListener("click", () => {
  chimeEnabled = !chimeEnabled;
  if (chimeEnabled) {
    chimeButton.classList.remove("chime-off");
    chimeButton.classList.add("chime-on");
    chimeButton.textContent = "notifications_active";
  } else {
    chimeButton.classList.remove("chime-on");
    chimeButton.classList.add("chime-off");
    chimeButton.textContent = "notifications_off";
  }
});

// Función para reproducir el sonido de la señal horaria
const playChime = () => {
  const audio = new Audio("asset/audio/hourly-chime.wav");
  audio.play();
};

// Intervalo para verificar la hora
let lastHour = new Date().getHours();
setInterval(() => {
  const now = new Date();

  // Reproducir la señal horaria si está activada y cambia la hora
  if (chimeEnabled && now.getHours() !== lastHour) {
    playChime();
    lastHour = now.getHours();
  }

  // Actualizar la hora y fecha en pantalla
  const zeroFill = (n) => ("0" + n).slice(-2);
  const timeDate =
    zeroFill(now.getHours()) +
    ":" +
    zeroFill(now.getMinutes()) +
    ":" +
    zeroFill(now.getSeconds());
  const dateTime = now.toDateString();

  // Display the date and time on the screen using div#date-time
  document.getElementById("date-time").innerHTML = dateTime;
  document.getElementById("time-date").innerHTML = timeDate;
}, 1000);
