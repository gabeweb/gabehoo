function getOS() {
  var e = window.navigator.userAgent,
    n = window.navigator.platform,
    i = null;
  return (
    -1 !== ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].indexOf(n)
      ? (i = "Mac OS")
      : ["iPhone", "iPad", "iPod"].includes(n)
      ? (i = "iOS")
      : -1 !== ["Win32", "Win64", "Windows", "WinCE"].indexOf(n)
      ? (i = "Windows")
      : /Android/.test(e)
      ? (i = "Android")
      : !i && /Linux/.test(n)
      ? (i = "Linux")
      : !i && /X11/.test(n) && (i = "UNIX"),
    i
  );
}
function newSysinfoRow(e, n) {
  let i = document.createElement("span");
  (i.innerHTML = e),
    (i.style.color = "var(--green)"),
    (i.style.fontWeight = "bold");
  let r = document.createElement("span");
  r.innerHTML = ": ";
  let t = document.createTextNode(n),
    s = document.createElement("li");
  return s.appendChild(i), s.appendChild(r), s.appendChild(t), s;
}
let canvas = document.createElement("canvas"),
  gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl"),
  debug = gl.getExtension("WEBGL_debug_renderer_info"),
  renderer = gl.getParameter(debug.UNMASKED_RENDERER_WEBGL),
  architecture = navigator.userAgent.match(/\(([^)]+)\)/)[1].split("; ")[1],
  kernel = renderer.split("(")[0].trim(),
  gpu = renderer.split("(")[1].split(")")[0].split(",").pop().trim(),
  sysinfo = document.getElementById("sysinfo"),
  ua = navigator.userAgent;
function getBrowserNameAndVersion() {
  const e = navigator.userAgent;
  let n = "",
    i = "",
    r = "";
  return (
    e.includes("Firefox")
      ? ((n = "Mozilla Firefox"),
        (i = e.substring(e.indexOf("Firefox")).split("/")[1]))
      : e.includes("SamsungBrowser")
      ? ((n = "Samsung Internet"),
        (i = e.substring(e.indexOf("SamsungBrowser")).split("/")[1]))
      : e.includes("Opera") || e.includes("OPR")
      ? ((n = "Opera"), (i = e.substring(e.indexOf("OPR")).split("/")[1]))
      : e.includes("Edg")
      ? ((n = "Microsoft Edge (Chromium)"),
        (i = e.substring(e.indexOf("Edg")).split("/")[1]))
      : e.includes("Chrome")
      ? ((n = "Google Chrome or Chromium"),
        (i = e.substring(e.indexOf("Chrome")).split("/")[1]))
      : e.includes("Safari")
      ? ((n = "Apple Safari"),
        (i = e.substring(e.indexOf("Safari")).split("/")[1]))
      : e.includes("Trident")
      ? ((n = "Microsoft Internet Explorer"),
        (i = e.substring(e.indexOf("rv:")).split(",")[0].replace("rv:", "")))
      : (n = "unknown"),
    (r = i.split(".")[0]),
    `${n} ${i}`
  );
}
sysinfo.appendChild(newSysinfoRow("User Agent", ua)),
  sysinfo.appendChild(newSysinfoRow("Browser", getBrowserNameAndVersion()));
let os = getOS();
sysinfo.appendChild(newSysinfoRow("OS", os)),
  sysinfo.appendChild(newSysinfoRow("Architecture", architecture)),
  sysinfo.appendChild(
    newSysinfoRow("Resolution", `${screen.width}x${screen.height}`)
  ),
  sysinfo.appendChild(newSysinfoRow("GPU", renderer)),
  sysinfo.appendChild(
    newSysinfoRow("CPU", `${navigator.hardwareConcurrency} core processor`)
  ),
  sysinfo.appendChild(newSysinfoRow("Memory", `${navigator.deviceMemory} GB`));
