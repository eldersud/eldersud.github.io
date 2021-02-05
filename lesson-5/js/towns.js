
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        console.table(jsonObject); 
        const towns = jsonObject['towns']; 
        for (let i = 0; i < towns.length; i++ ){
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let h3= document.createElement('h3');
            let p1= document.createElement('p');
            let p2= document.createElement('p');
            let p3= document.createElement('p');
            let img = document.createElement('img');
            h2.textContent = towns[i].name;
            card.appendChild(h2);
            h3.textContent = towns[i].motto;
            card.appendChild(h3);
            p1.textContent = 'Year Founded: ' +  towns[i].yearFounded;
            card.appendChild(p1);
            p2.textContent = 'Current Population: ' +  towns[i].currentPopulation;
            card.appendChild(p2);
            p3.textContent = 'Anual Rain Fall: ' +  towns[i].averageRainfall;
            card.appendChild(p3);
            img.setAttribute('src', towns[i].photo);
            img.setAttribute('alt', towns[i].name);
            card.appendChild(img);
            document.querySelector('div.cards').appendChild(card);

        }
      });
