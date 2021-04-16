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

  
  