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
  titleSpan.style.color = "var(--indigo)";

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
let platform = window.navigator.platform;
let kernel = renderer.split("(")[0].trim();
let gpu = renderer.split("(")[1].split(")")[0].split(",").pop().trim();

// Sysinfo
let sysinfo = document.getElementById("sysinfo");

// User Agent
let ua = navigator.userAgent;
sysinfo.appendChild(newSysinfoRow("User Agent", ua));

// Brpwser
let browserTest = ua.match(/(\w+)\/(\d+\.\d+(?:\.\d+)?(?:\.\d+)?)/g),
    browserOffset = browserTest.length && (browserTest.length > 2 && !(/^(ver|cri|gec)/.test(browserTest[1])) ? 1 : 0),
    browserResult = browserTest.length && browserTest[browserTest.length - 1 - browserOffset].split("/"),
    browser = browserResult && browserResult[0],
    version = browserResult && browserResult[1];

sysinfo.appendChild(newSysinfoRow("Browser", browser + " " + version));

// Operating system
let os = getOS();
sysinfo.appendChild(newSysinfoRow("OS", os));
sysinfo.appendChild(newSysinfoRow("Platform", platform));

// Resolution
sysinfo.appendChild(
  newSysinfoRow("Resolution", `${screen.width}x${screen.height}`)
);

sysinfo.appendChild(newSysinfoRow("GPU", renderer));
sysinfo.appendChild(
  newSysinfoRow("CPU", `${navigator.hardwareConcurrency} core processor`)
);

sysinfo.appendChild(newSysinfoRow("Memory", `${navigator.deviceMemory} GB`));