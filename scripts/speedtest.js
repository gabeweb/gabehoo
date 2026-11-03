// ==========================================
// CONFIGURACIÓN
// ==========================================
var fileAddr = "https://gabeweb.github.io/gabehoo/asset/data/test-file.bin";
var downloadSize = 26214400; // 25 MB en bytes

function showMessage(msg) {
  var result = document.getElementById("speedtest-result");
  if (result) {
    var actualHTML = typeof msg == "string" ? msg : msg.join("<br />");
    result.innerHTML = actualHTML;
  }
}

function startSpeedDetection() {
  showMessage("<span id='dottime'>Measuring internet speed, please wait...</span>");
  window.setTimeout(getConnectionSpeed, 1000);
}

function speedTest() {
  startSpeedDetection();
}

// ==========================================
// PRUEBA DE VELOCIDAD CON FETCH
// ==========================================
async function getConnectionSpeed() {
  const startTime = performance.now();

  var cacheBuster = "?nocache=" + Date.now() + "_" + Math.random();

  try {
    const response = await fetch(fileAddr + cacheBuster);

    if (!response.ok) {
      throw new Error("Unable to establish a connection to the test server.");
    }

    const blob = await response.blob();
    const endTime = performance.now();

    showResults(startTime, endTime);

  } catch (err) {
    console.error(err);
    showMessage("<span style='color: var(--red)'>Error: Unable to verify your internet connection.</span>");
  }

  function showResults(start, end) {
    var duration = (end - start) / 1000;
    if (duration <= 0) return;

    var bitsLoaded = downloadSize * 8;
    var speedBps = (bitsLoaded / duration).toFixed(2);
    var speedKbps = (speedBps / 1024).toFixed(2);
    var speedMbps = (speedKbps / 1024).toFixed(2);

    // 1. Primero mostramos las velocidades y dejamos el contenedor #resultado vacío/preparado
    showMessage([
      "<h4>Your internet connection speed is:</h4>",
      "<label class='text-primary'><span style='color: var(--yellow); font-size: 1.5em;'>" + speedBps + "</span></label> bps",
      "<label class='text-primary'><span style='color: var(--indigo); font-size: 1.5em;'>" + speedKbps + "</span></label> kbps",
      "<label class='text-primary'><span style='color: var(--red); font-size: 1.5em;'>" + speedMbps + "</span></label> Mbps",
      "<div id='resultado'>Loading location data...</div>"
    ]);

    // 2. Justo en este momento (cuando terminó la prueba), consultamos la IP y la rellenamos
    $.getJSON("https://get.geojs.io/v1/ip/geo.js?callback=?", function (e) {
      console.log("GeoJS data received:", e);
      var proveedor = e.organization || "N/A";

      $("#resultado").html(
        "<p>Based on your public IP address: <a href='https://www.geojs.io' title='GeoJS' target='_blank' style='text-decoration-line: underline; text-decoration-style: dotted; cursor: help;'>" +
          e.ip +
          "</a> provided by <span style='font-weight: bold;'>" +
          proveedor +
          "</span> in <span style='font-weight: bold;'>" +
          e.city +
          "</span>, <span style='font-weight: bold;'>" +
          e.country +
          "</span></p>"
      );
    }).fail(function (jqXHR, textStatus, errorThrown) {
      console.error("GeoJS failed:", textStatus, errorThrown);
      $("#resultado").html("<p>Error loading location data.</p>");
    });
  }
}