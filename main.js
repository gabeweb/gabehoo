// GetStarted - A simple responsive Startpage
// Author: MrAlpha786 (github.con/MrAlpha786)

// Greeting time!
currentTime = new Date();
//getHour() function will retrieve the hour from current time
if (currentTime.getHours() < 12)
  document.getElementById("greeting").innerHTML = "Morning!";
else if (currentTime.getHours() < 18)
  document.getElementById("greeting").innerHTML = "Afternoon!";
else document.getElementById("greeting").innerHTML = "Evening!";

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
