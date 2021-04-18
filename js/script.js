const api ={
    key: "840f74b291c81f7dab17af38a197be5d",
    baseurl: "https://home.openweathermap.org/api_keys",  
}

const barrapesquisa = document.querySelector('.barra-pesquisa');
barrapesquisa.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.kayCode ==13) {
        getResults(barrapesquisa.value);
        console.log(barrapesquisa.value);
    }
}

function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then(displayResults);
  }

  function displayResults (weather) {
  let city = document.querySelector('.local .cidade');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector('.local .data');
  date.innerText = dateBuilder(now);

  let temp = document.querySelector('.clima .graus');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  let weather_el = document.querySelector('.clima .tempo');
  weather_el.innerText = weather.weather[0].main;

  let hilow = document.querySelector('.hi-low');
  hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}

function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }

  
  