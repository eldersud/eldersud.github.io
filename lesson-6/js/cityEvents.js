
const eventstURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


if (document.getElementById("preston-body")) {
    townName = "Preston";
} else if (document.getElementById("soda-body")) {
    townName = "Soda Springs";
} else if (document.getElementById("fish-body")) {
    townName = "Fish Haven";
}

fetch(eventstURL)
      .then(function (response) {
        return response.json(); 
      })
      .then(function (jsonObject) {
        console.table(jsonObject);  
        const city = jsonObject['towns'];

    for (let i = 0; i < city.length; i++){
        if (city[i].name == townName) { 

        
        let boxevent = document.createElement('section');
        let h3 = document.createElement('h3');
        h3.textContent = city[i].name + " Events:";
        boxevent.appendChild(h3);

        
        for (let e = 0; e < city[i].events.length; e++) {
        let p = document.createElement('p');
        p.textContent = city[i].events[e];
        boxevent.appendChild(p);
        }
        document.querySelector('div.city-event').appendChild(boxevent);
        }
    }
});