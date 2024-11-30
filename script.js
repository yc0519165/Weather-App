const input = document.getElementById("input");
const deg = document.getElementById("deg");
const address = document.getElementById("city");
const humanity = document.getElementById("humanity");
const speed = document.getElementById("speed");

//"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/pune/2024-11-27?key=UYHMPVGP4MTZKXZUHM65LDGFF"

async function checkWeather() {
  const city = input.value;
  const date = new Date();

  const year = date.getFullYear();
  const day = date.getDay();
  const month = date.getMonth() + 1;

  document.getElementById("input").value = "";
  const data = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${year}-${month}-30?key=UYHMPVGP4MTZKXZUHM65LDGFF`
  );
  const res = await data.json();
  console.log(res);
  // const tempa = res.Date[0].temp
  deg.innerHTML = `${res.currentConditions.temp}\u00B0C`;
  humanity.innerHTML = `${res.currentConditions.humidity} %`;
  address.innerHTML = res.address;
  speed.innerHTML = `${res.currentConditions.windspeed} Km/h`;
}
