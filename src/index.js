function selectCountry(event) {
  let citySelected = event.target.value;
  if (citySelected.length > 0) {
  }
}
function updateTime() {
  let londonTime = document.querySelector("#london-time");
  let londonDate = document.querySelector("#london-date");
  let tehranTime = document.querySelector("#tehran-time");
  let tehranDate = document.querySelector("#tehran-date");

  londonTime.innerHTML = moment
    .tz("Europe/London")
    .format("hh:mm:ss [<small>]A[</small>]");
  londonDate.innerHTML = moment.tz("Europe/London").format("MMMM Do YYYY");

  tehranTime.innerHTML = moment
    .tz("Asia/Tehran")
    .format("hh:mm:ss [<small>]A[</small>]");
  tehranDate.innerHTML = moment.tz("Asia/Tehran").format("MMMM Do YYYY");
}

setInterval(updateTime, 1000);

let selectElement = document.querySelector("#select-country");
selectElement.addEventListener("change", selectCountry);
