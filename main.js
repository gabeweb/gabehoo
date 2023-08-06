var greet,
  myDate = new Date(),
  hrs = myDate.getHours(),
  html = "";
hrs < 12
  ? (greet = html + '<span class="morning">Good Morning!</span>')
  : hrs >= 12 && hrs <= 17
  ? (greet = html + '<span class="afternoon">Good Afternoon!</span>')
  : hrs >= 17 &&
    hrs <= 24 &&
    (greet = html + '<span class="evening">Good Evening!</span>'),
  (document.getElementById("greeting").innerHTML = greet);
const zeroFill = (e) => ("0" + e).slice(-2),
  interval = setInterval(() => {
    const e = new Date(),
      t =
        " " +
        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][e.getDay()] +
        " " +
        [
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
        ][e.getMonth()] +
        " " +
        zeroFill(e.getDate()) +
        ", " +
        e.getFullYear(),
      n =
        " " +
        zeroFill(e.getHours()) +
        "<span id='dottime'>:</span>" +
        zeroFill(e.getMinutes()) +
        "<span id='dottime'>:</span>" +
        zeroFill(e.getSeconds());
    (document.getElementById("date-time").innerHTML = t),
      (document.getElementById("time-date").innerHTML = n);
  }, 1e3);
