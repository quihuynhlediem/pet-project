let weather = document.getElementById('weather');
let locationShow = document.getElementById('location_show');
let temperature = document.getElementById('temperature');
let placeSearch = document.getElementById('place_input');
let placeSearchBtn = document.getElementById('place_input_btn');

function weatherShow(weathercode) {
  switch (weathercode) {
    case 0:
    case 1:
    case 2:
    case 3:
      return ('Clear Sky');
      break;
    case 45:
    case 48:
      return ('Foggy');
      break;
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      return ('Drizzle');
      break;
    
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 80:
    case 81:
    case 82:
      return ('Raining');
      break;
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return ('Snowy');
      break;
    case 95:
    case 96:
    case 99:
      return ('Thunderstorm');
      break;
    default:
      return ('No infomation'); 
   }

};

placeSearchBtn.addEventListener('click', function () {
  //console.log(placeSearch.value);
  fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${placeSearch.value}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //console.log(data);
    locationShow.innerHTML = data.results[0].name;
    let templink = `https://api.open-meteo.com/v1/forecast?latitude=${data.results[1].latitude}&longitude=${data.results[1].longitude}&current_weather=true`;
    fetch(templink)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //console.log(data);
        temperature.innerHTML = data.current_weather.temperature + '°C';
        weather.innerHTML = weatherShow(data.current_weather.weathercode);
        //console.log(data.current_weather.weathercode);
      })
  });
 });