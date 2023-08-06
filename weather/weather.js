(App = {
  getWeatherIcon: function (e) {
    var t = e.slice(2, 3);
    console.log(t);
    var n = e.slice(0, 2);
    if ("d" == t)
      switch (n) {
        case "01":
          return "weather/icons/sunny.svg";
        case "02":
          return "weather/icons/partly_cloudy.svg";
        case "03":
          return "weather/icons/cloudy.svg";
        case "04":
          return "weather/icons/cloudy_s_sunny.svg";
        case "09":
          return "weather/icons/rain_s_cloudy.svg";
        case "10":
          return "weather/icons/rain.svg";
        case "11":
          return "weather/icons/thunderstorms.svg";
        case "13":
          return "weather/icons/snow.svg";
        case "50":
          return "weather/icons/mist.svg";
        default:
          return null;
      }
    else
      switch (n) {
        case "01":
          return "weather/icons/night.svg";
        case "02":
          return "weather/icons/night_partly_cloudy.svg";
        case "03":
          return "weather/icons/cloudy.svg";
        case "04":
          return "weather/icons/cloudy_night.svg";
        case "09":
          return "weather/icons/rain_night.svg";
        case "10":
          return "weather/icons/rain.svg";
        case "11":
          return "weather/icons/thunderstorms.svg";
        case "13":
          return "weather/icons/night_snow.svg";
        case "50":
          return "weather/icons/mist.svg";
        default:
          return null;
      }
  },
  getWeather: function () {
    let e = new XMLHttpRequest();
    e.open(
      "GET",
      "https://api.openweathermap.org/data/2.5/weather?q=Cabimas,Venezuela&appid=dba306998ebe631bfd796148d0ff7a9b&units=metric"
    ),
      (e.onload = () => {
        if (4 === e.readyState)
          if (200 === e.status) {
            let s = JSON.parse(e.responseText);
            var t = s.main.feels_like.toFixed(0) + "&deg;C",
              n = s.weather[0].description,
              r = App.getWeatherIcon(s.weather[0].icon);
            r
              ? ((document.getElementById("weather-container").title = n),
                (document.getElementById("weather").innerHTML = t),
                (document.getElementById("weather-icon").src = r))
              : (document.getElementById("weather").innerHTML = n + t);
          } else console.log("error msg: " + e.status);
      }),
      e.send();
  },
  init: function () {
    App.getWeather();
  },
}),
  (window.onload = App.init());
