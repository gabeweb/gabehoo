// Display system info
// adapted from
// https://github.com/Dou2ble/qutefetch
// https://stackoverflow.com/a/75609792
// https://dev.to/vaibhavkhulbe/get-os-details-from-the-webpage-in-javascript-b07

//var nVer = navigator.appVersion;
var nAgt = navigator.userAgent;
//var browserName = navigator.appName;
//var fullVersion = ''+parseFloat(navigator.appVersion);
//var majorVersion = parseInt(navigator.appVersion,10);
var nameOffset, verOffset, ix;
var os = navigator.userAgent.match(/\(([^)]+)\)/)[1].split("; ")[0];
var architecture = navigator.userAgent.match(/\(([^)]+)\)/)[1].split("; ")[1];

// Browser Name
// In Opera, the true version is after "OPR" or after "Version"
if ((verOffset = nAgt.indexOf("OPR")) != -1) {
  browserName = "Opera";
  fullVersion = nAgt.substring(verOffset + 4);
  if ((verOffset = nAgt.indexOf("Version")) != -1)
    fullVersion = nAgt.substring(verOffset + 8);
}
// In MS Edge, the true version is after "Edg" in userAgent
else if ((verOffset = nAgt.indexOf("Edg" || "EdgA")) != -1) {
  browserName = "Microsoft Edge";
  fullVersion = nAgt.substring(verOffset + 4 || verOffset + 8);
}
// In MSIE, the true version is after "MSIE" in userAgent
else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
  browserName = "Microsoft Internet Explorer";
  fullVersion = nAgt.substring(verOffset + 5);
}
// In Firefox, the true version is after "Firefox"
else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
  browserName = "Mozilla Firefox";
  fullVersion = nAgt.substring(verOffset + 8);
}
// In Chrome, the true version is after "Chrome"
else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
  browserName = "Google Chrome or Chromium";
  fullVersion = nAgt.substring(verOffset + 7);
}
// In Safari, the true version is after "Safari" or after "Version"
else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
  browserName = "Safari";
  fullVersion = nAgt.substring(verOffset + 7);
  if ((verOffset = nAgt.indexOf("Version")) != -1)
    fullVersion = nAgt.substring(verOffset + 8);
}
// In most other browsers, "name/version" is at the end of userAgent
else if (
  (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/"))
) {
  browserName = nAgt.substring(nameOffset, verOffset);
  fullVersion = nAgt.substring(verOffset + 1);
  if (browserName.toLowerCase() == browserName.toUpperCase()) {
    browserName = navigator.appName;
  }
}
// trim the fullVersion string at semicolon/space if present
if ((ix = fullVersion.indexOf(";")) != -1)
  fullVersion = fullVersion.substring(0, ix);
if ((ix = fullVersion.indexOf(" ")) != -1)
  fullVersion = fullVersion.substring(0, ix);

majorVersion = parseInt("" + fullVersion, 10);
if (isNaN(majorVersion)) {
  fullVersion = "" + navigator.userAgent.match(/\(([^)]+)\)/)[1].split("; ")[1];
  majorVersion =
    "" + navigator.userAgent.match(/\(([^)]+)\)/)[1].split("; ")[1];
}

// TODO: not functionally on Firefox/Edge mobile
// WebGL Renderer
// let canvas = document.createElement('canvas');
// let gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
// let debug = gl.getExtension('WEBGL_debug_renderer_info');
// let renderer = gl.getParameter(debug.UNMASKED_RENDERER_WEBGL);
// let kernel = renderer.split('(')[0].trim();
// let gpu = renderer.split('(')[1].split(')')[0].split(',').pop().trim();

// Sysinfo
function newSysinfoRow(title, text) {
  let titleSpan = document.createElement("span");
  titleSpan.innerHTML = title;
  titleSpan.style.color = "var(--green)";
  titleSpan.style.fontWeight = "bold";

  let colonSpan = document.createElement("span");
  colonSpan.innerHTML = ": ";

  let textNode = document.createTextNode(text);

  let li = document.createElement("li");
  li.appendChild(titleSpan);
  li.appendChild(colonSpan);
  li.appendChild(textNode);

  return li;
}

let sysinfo = document.getElementById("sysinfo");

sysinfo.appendChild(newSysinfoRow("User Agent", nAgt));
sysinfo.appendChild(newSysinfoRow("Browser", browserName + " " + fullVersion));
sysinfo.appendChild(newSysinfoRow("OS", os));
sysinfo.appendChild(newSysinfoRow("Architecture", architecture));
sysinfo.appendChild(
  newSysinfoRow("Screen Resolution", `${screen.width}x${screen.height}`)
);
//sysinfo.appendChild(newSysinfoRow("GPU", gpu));
sysinfo.appendChild(
  newSysinfoRow("CPU", `${navigator.hardwareConcurrency} core processor`)
);

// Device Memory

if (navigator.deviceMemory) {
  const memory = navigator.deviceMemory;
  sysinfo.appendChild(newSysinfoRow("Memory", `${memory} GB`)); // Imprime la cantidad de memoria RAM en GB
} else {
  sysinfo.appendChild(
    newSysinfoRow(
      "Memory",
      "The 'deviceMemory' property is not supported on this browser or platform."
    )
  );
}
