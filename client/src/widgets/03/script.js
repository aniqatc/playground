export function initializeScript() {
  // operation system
  console.log(navigator.platform);
  // location
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
  });
  // device type
  if (
    navigator.userAgent.includes("Mobi") ||
    navigator.userAgent.includes("Android")
  ) {
    console.log("mobile");
  } else {
    console.log("desktop or tablet");
  }
  // browser
  console.log(navigator.userAgent);
  // timezone
  console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
}
