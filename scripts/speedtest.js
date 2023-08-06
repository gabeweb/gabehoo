var imageAddr =
    "https://freetestdata.com/wp-content/uploads/2023/04/10.5-MB-scaled.bmp",
  downloadSize = 26235156;
function showMessage(e) {
  var t = document.getElementById("speedtest-result");
  if (t) {
    var n = "string" == typeof e ? e : e.join("<br />");
    t.innerHTML = n;
  }
}
function startSpeedDetection() {
  showMessage(
    "<span id='dottime'>Please wait identifying internet speed</span>"
  ),
    window.setTimeout(getConnectionSpeed, 3e3);
}
function speedTest() {
  startSpeedDetection();
}
function getConnectionSpeed() {
  var e,
    t,
    n = new Image();
  (n.onload = function () {
    var n, o, s;
    (t = new Date().getTime()),
      (n = ((8 * downloadSize) / ((t - e) / 1e3)).toFixed(2)),
      (o = (n / 1024).toFixed(2)),
      (s = (o / 1024).toFixed(2)),
      showMessage([
        "<h4>Your internet connection speed is:</h4>",
        "<label class='text-primary'><span style='color: var(--yellow); font-size: 1.5em;'>" +
          n +
          "</span></label> bps",
        "<label class='text-primary'><span style='color: var(--indigo); font-size: 1.5em;'>" +
          o +
          "</span></label> kbps",
        "<label class='text-primary'><span style='color: var(--red); font-size: 1.5em;'>" +
          s +
          "</span></label> Mbps",
        "<div id='resultado'></div>",
      ]);
  }),
    (n.onerror = function (e, t) {
      showMessage(
        "<span style='color: var(--red)'>Error: Failed to get internet connection</span>"
      );
    });
  var o = "?nnn=" + (e = new Date().getTime());
  (n.src = imageAddr + o),
    $(document).ready(function () {
      $.getJSON("https://hutils.loxal.net/whois", function (e) {
        console.log(e),
          $("#resultado").html(
            "<p>Based on your public IP address: <a href='https://hutils.loxal.net/whois' title='loxal' target='_blank' style='text-decoration-line: underline; text-decoration-style: dotted; cursor: help;'>" +
              e.ip +
              "</a> provided by <span style='font-weight: bold;'>" +
              e.isp +
              "</span> at <span style='font-weight: bold;'>" +
              e.city +
              "</span>, <span style='font-weight: bold;'>" +
              e.country +
              "<span></p>"
          );
      });
    });
}
