const COORDS = 'coords';

function handleGeoSuccess(position) {
  console.log(position);
}
function handleGeoError() {
  console.log("Can't access geo location");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCords = localStorage.getItem(COORDS);
  if (loadedCords === null) {
    askForCoords();
  } else {
    //getweather
  }
}

function init() {
  loadCoords();
}
init();
