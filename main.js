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

// Date and Time
// Function to format 1 in 01
const zeroFill = (n) => {
  return ("0" + n).slice(-2);
};

// Creates interval
const interval = setInterval(() => {
  // Get current time
  const now = new Date();
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Format date as in mm/dd/aaaa hh:ii:ss
  const dateTime =
    " " +
    weekday[now.getDay()] +
    " " +
    month[now.getMonth()] +
    " " +
    zeroFill(now.getDate()) +
    ", " +
    now.getFullYear();
  const timeDate =
    " " +
    zeroFill(now.getHours()) +
    "<span id='dottime'>:</span>" +
    zeroFill(now.getMinutes()) +
    "<span id='dottime'>:</span>" +
    zeroFill(now.getSeconds());

  // Display the date and time on the screen using div#date-time
  document.getElementById("date-time").innerHTML = dateTime;
  document.getElementById("time-date").innerHTML = timeDate;
}, 1000);

// Display system nfo
// taken from
// https://github.com/Dou2ble/qutefetch

function newSysinfoRow(title, text) {
  let titleSpan = document.createElement("span");
  titleSpan.innerHTML = title;
  titleSpan.style.color = "var(--indigo)";

  let colonSpan = document.createElement("span");
  colonSpan.innerHTML = ": ";

  let textNode = document.createTextNode(text);

  let div = document.createElement("div");
  div.appendChild(titleSpan);
  div.appendChild(colonSpan);
  div.appendChild(textNode);

  return div;
}

// WebGL Renderer
let canvas = document.createElement("canvas");
let gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
let debug = gl.getExtension("WEBGL_debug_renderer_info");
let renderer = gl.getParameter(debug.UNMASKED_RENDERER_WEBGL);
let gpu = renderer.split("(")[0].trim();
let kernel = renderer.split("(")[1].split(")")[0].split(",").pop().trim();

// Sysinfo
let sysinfo = document.getElementById("sysinfo");

// Operating system
sysinfo.appendChild(newSysinfoRow("OS", window.navigator.platform));
sysinfo.appendChild(newSysinfoRow("Kernel", kernel));

// Resolution
sysinfo.appendChild(
  newSysinfoRow("Resolution", `${screen.width}x${screen.height}`)
);

sysinfo.appendChild(newSysinfoRow("GPU", gpu));
sysinfo.appendChild(
  newSysinfoRow("CPU", `${navigator.hardwareConcurrency} core processor`)
);

sysinfo.appendChild(newSysinfoRow("Memory", `${navigator.deviceMemory} GB`));
