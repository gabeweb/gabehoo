// script based on:
// https://www.sourcecodester.com/tutorials/javascript/12647/javascript-check-internet-speed.html

var imageAddr =
  "https://freetestdata.com/wp-content/uploads/2023/04/10.5-MB-scaled.bmp";
var downloadSize = 21000000; //bytes

function showMessage(msg) {
  var result = document.getElementById("speedtest-result");
  if (result) {
    var actualHTML = typeof msg == "string" ? msg : msg.join("<br />");
    result.innerHTML = actualHTML;
  }
}

function startSpeedDetection() {
  showMessage("<span id='dottime'>Please wait identifying internet speed</span>");
  window.setTimeout(getConnectionSpeed, 3000);
}

function speedTest() {
  startSpeedDetection();
}

function getConnectionSpeed() {
  var startTime, endTime;
  var download = new Image();
  download.onload = function () {
    endTime = new Date().getTime();
    showResults();
  };

  download.onerror = function (err, msg) {
    showMessage("<span style='color: var(--red)'>Error: Failed to get internet connection</span>");
  };

  startTime = new Date().getTime();
  var cacheBuster = "?nnn=" + startTime;
  download.src = imageAddr + cacheBuster;

  function showResults() {
    var duration = (endTime - startTime) / 1000;
    var bitsLoaded = downloadSize * 8;
    var speedBps = (bitsLoaded / duration).toFixed(2);
    var speedKbps = (speedBps / 1024).toFixed(2);
    var speedMbps = (speedKbps / 1024).toFixed(2);
    showMessage([
      "<h4>Your internet connection speed is:</h4>",
      "<label class='text-primary'>" + "<span style='color: var(--yellow); font-size: 1.5em;'>" + speedBps + "</span>" + "</label> bps",
      "<label class='text-primary'>" + "<span style='color: var(--indigo); font-size: 1.5em;'>" + speedKbps + "</span>" + "</label> kbps",
      "<label class='text-primary'>" + "<span style='color: var(--red); font-size: 1.5em;'>" + speedMbps + "</span>" + "</label> Mbps",
    ]);
  }
}
