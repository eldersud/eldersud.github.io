const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=727f53b8cdaee659ac2e713f75c01722";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let kDgrees= jsObject.main.temp;//get the temperature in kelvin degrees.
    let cDgrees = kDgrees - 273.15;//convert Kelvin degrees to Celcius degrees.
    let fDgrees = Math.floor(cDgrees * (9 / 5) + 32);//convert celcius degrees to Fahrenheit.
    document.getElementById('current-temp').textContent = fDgrees;
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
    const desc = jsObject.weather[0].description; // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
  });
      