function selectCountry(event) {
  let citySelected = event.target.value;

  if (citySelected.length > 0) {
    if (citySelected === "current") {
      citySelected = moment.tz.guess();
    }
    let cityString = citySelected.replace("_", " ").split("/")[1];
    let cityContainer = document.querySelector(".time-container");
    cityContainer.innerHTML = `<div class="city-container">
          <div class="time" ">${moment
            .tz(citySelected)
            .format("hh:mm:ss [<small>]A[</small>]")}</div>
          <div class="city">${cityString}</div>
          <div class="date">${moment
            .tz(citySelected)
            .format("MMMM Do YYYY")}</div>
        </div>`;
  }
}
function updateTime() {
  let londonTime = document.querySelector("#london-time");
  let londonDate = document.querySelector("#london-date");
  let tehranTime = document.querySelector("#tehran-time");
  let tehranDate = document.querySelector("#tehran-date");
  let romeTime = document.querySelector("#milan-time");
  let romeDate = document.querySelector("#milan-date");

  londonTime.innerHTML = moment
    .tz("Europe/London")
    .format("hh:mm:ss [<small>]A[</small>]");
  londonDate.innerHTML = moment.tz("Europe/London").format("MMMM Do YYYY");

  tehranTime.innerHTML = moment
    .tz("Asia/Tehran")
    .format("hh:mm:ss [<small>]A[</small>]");
  tehranDate.innerHTML = moment.tz("Asia/Tehran").format("MMMM Do YYYY");

  romeTime.innerHTML = moment
    .tz("Europe/Rome")
    .format("hh:mm:ss [<small>]A[</small>]");
  romeDate.innerHTML = moment.tz("Europe/Rome").format("MMMM Do YYYY");
}

setInterval(updateTime, 1000);

let selectElement = document.querySelector("#select-country");
selectElement.addEventListener("change", selectCountry);
