
const APIurl = 'https://api.openweathermap.org/data/2.5/';
const weatherAPIurl = APIurl + 'weather';
const forecastAPIurl = APIurl + 'forecast';
const apiID = '&appid=727f53b8cdaee659ac2e713f75c01722';
const apiUnits = '&units=imperial';
const prestonURL = '?id=5604473' + apiID + apiUnits;


const prestonWeather = weatherAPIurl + prestonURL;
const prestonForecast = forecastAPIurl + prestonURL;



let weatherURL = "";
let forecastURL = "";
if (document.getElementById("preston-body")) {
    weatherURL = prestonWeather;
    forecastURL = prestonForecast;
} 



fetch(weatherURL)
    .then((response) => response.json())
    .then((jsObject) => {
        let temp = parseFloat(jsObject.main.temp);
        let speed = parseFloat(jsObject.wind.speed);
        let output = "N/A";
        const imagesrc = 'https://openweathermap.org/img/wn/' + jsObject.weather[0].icon + '.png';
        const weatherDesc = jsObject.weather[0].description; 
        document.getElementById('icon').setAttribute('src', imagesrc); 
        document.getElementById('icon').setAttribute('style', "width:100px; height:100px;"); 
        document.getElementById('icon').setAttribute('alt', weatherDesc);
        document.getElementById('current').innerHTML = weatherDesc;
        document.getElementById('temp').innerHTML = Math.round(temp) + "&#8457;";
        if (temp <= 50 && speed >= 3) {
            let faren = (35.74 + (0.6215 * temp)) - (35.75 * (Math.pow(speed, 0.16))) + (0.4275 * (temp * (Math.pow(speed, 0.16))));
            output = Math.round(faren);
        };

        document.getElementById('highTemp').innerHTML = jsObject.main.temp_max + "&#8457;";
        document.getElementById("wind-chill").innerHTML = output + "&#8457;";
        document.getElementById('humidity').innerHTML = jsObject.main.humidity+"%";
        document.getElementById('wind-speed').innerHTML = Math.round(speed) + " MPH";
    });
    //--------------------------------------------------------------
fetch(forecastURL)
    .then((response) => response.json())
    .then((forecastObject) => {
        var forecast = forecastObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.table(forecast)
        for (let day = 0; day < forecast.length; day++) {

           
            let weatherDay = document.getElementsByClassName('day');
            for (let i = 0; i < weatherDay.length; i++) {
                let longDate = new Date(forecast[day].dt_txt);
                weatherDay[day].textContent = longDate.toLocaleString("en-us", {
                    weekday: "long"
                });
            }
            
            let forecastTemp = document.getElementsByClassName('forecastTemp');
            for (let i = 0; i < forecastTemp.length; i++) {
                forecastTemp[day].innerHTML = forecast[day].main.temp;
            }
           
            let weatherIcon = document.getElementsByClassName("forcastimg");
            for (let i = 0; i < weatherIcon.length; i++) {
                weatherIcon[day].setAttribute("src", `https://openweathermap.org/img/wn/${forecast[day].weather[0].icon}@2x.png`);
                weatherIcon[day].setAttribute("alt", `Icon representing ${forecast[day].weather[0].description}`);
            }
        }

    });