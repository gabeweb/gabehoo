// Display system info
// adapted from
// https://github.com/Dou2ble/qutefetch
// https://stackoverflow.com/a/75609792
// https://dev.to/vaibhavkhulbe/get-os-details-from-the-webpage-in-javascript-b07

function getOS() {
  var userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
    windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
    iosPlatforms = ["iPhone", "iPad", "iPod"],
    os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = "Mac OS";
  } else if (iosPlatforms.includes(platform)) {
    os = "iOS";
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = "Windows";
  } else if (/Android/.test(userAgent)) {
    os = "Android";
  } else if (!os && /Linux/.test(platform)) {
    os = "Linux";
  } else if (!os && /X11/.test(platform)) {
    os = "UNIX";
  }

  return os;
}

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

// WebGL Renderer
let canvas = document.createElement("canvas");
let gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
let debug = gl.getExtension("WEBGL_debug_renderer_info");
let renderer = gl.getParameter(debug.UNMASKED_RENDERER_WEBGL);
let architecture = navigator.userAgent.match(/\(([^)]+)\)/)[1].split('; ')[1];
let kernel = renderer.split("(")[0].trim();
let gpu = renderer.split("(")[1].split(")")[0].split(",").pop().trim();

// Sysinfo
let sysinfo = document.getElementById("sysinfo");

// User Agent
let ua = navigator.userAgent;
sysinfo.appendChild(newSysinfoRow("User Agent", ua));

// Brpwser

function getBrowserNameAndVersion() {
  const userAgent = navigator.userAgent;
  let browserName = "";
  let fullVersion = "";
  let version = "";

  if (userAgent.includes("Firefox")) {
    browserName = "Mozilla Firefox";
    fullVersion = userAgent
      .substring(userAgent.indexOf("Firefox"))
      .split("/")[1];
  } else if (userAgent.includes("SamsungBrowser")) {
    browserName = "Samsung Internet";
    fullVersion = userAgent
      .substring(userAgent.indexOf("SamsungBrowser"))
      .split("/")[1];
  } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
    browserName = "Opera";
    fullVersion = userAgent.substring(userAgent.indexOf("OPR")).split("/")[1];
  } else if (userAgent.includes("Edg")) {
    browserName = "Microsoft Edge (Chromium)";
    fullVersion = userAgent.substring(userAgent.indexOf("Edg")).split("/")[1];
  } else if (userAgent.includes("Chrome")) {
    browserName = "Google Chrome or Chromium";
    fullVersion = userAgent
      .substring(userAgent.indexOf("Chrome"))
      .split("/")[1];
  } else if (userAgent.includes("Safari")) {
    browserName = "Apple Safari";
    fullVersion = userAgent
      .substring(userAgent.indexOf("Safari"))
      .split("/")[1];
  } else if (userAgent.includes("Trident")) {
    browserName = "Microsoft Internet Explorer";
    fullVersion = userAgent
      .substring(userAgent.indexOf("rv:"))
      .split(",")[0]
      .replace("rv:", "");
  } else {
    browserName = "unknown";
  }

  version = fullVersion.split(".")[0];

  return `${browserName} ${fullVersion}`;
}

sysinfo.appendChild(newSysinfoRow("Browser", getBrowserNameAndVersion()));

// Operating system
let os = getOS();
sysinfo.appendChild(newSysinfoRow("OS", os));
sysinfo.appendChild(newSysinfoRow("Architecture", architecture));

// Resolution
sysinfo.appendChild(
  newSysinfoRow("Resolution", `${screen.width}x${screen.height}`)
);

sysinfo.appendChild(newSysinfoRow("GPU", renderer));
sysinfo.appendChild(
  newSysinfoRow("CPU", `${navigator.hardwareConcurrency} core processor`)
);

sysinfo.appendChild(newSysinfoRow("Memory", `${navigator.deviceMemory} GB`));
