const input = document.getElementById("input");
const deg = document.getElementById("deg");
const address = document.getElementById("city");
const humanity = document.getElementById("humanity");
const speed = document.getElementById("speed");

const api =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/pune/2024-11-26?key=MA85H3QBHK3FGLU79LG3XRJM7";

async function checkWeather() {
  const city = input.value;
  document.getElementById("input").value = "";

  const data = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/2024-11-26?key=MA85H3QBHK3FGLU79LG3XRJM7`
  );
  const res = await data.json();
  console.log(res);
  deg.innerHTML = `${res.currentConditions.temp}\u00B0C`;

  humanity.innerHTML = `${res.currentConditions.humidity} %`;
  address.innerHTML = res.address;
  speed.innerHTML = `${res.currentConditions.windspeed} Km/h`;
}
