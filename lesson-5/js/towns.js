const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        console.table(jsonObject);  
        const towns = jsonObject['towns'];

        let town_numbers=[5,6, 1]
        for (let i = 0; i < town_numbers.length; i++ ) 
        {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            h2.textContent = towns[town_numbers[i]].name;
            let motto=document.createElement('h3');
            motto.textContent= towns[town_numbers[i]].motto;
            let year =document.createElement('p');
            year.textContent= "Year Founded: " + towns[town_numbers[i]].yearFounded;
            let population =document.createElement('p');
            population.textContent= "Population: " + towns[town_numbers[i]].currentPopulation;
            let rain =document.createElement('p');
            rain.textContent= "Annual Rain Fall: " + towns[town_numbers[i]].averageRainfall;
            let image=document.createElement('img');
            image.setAttribute('src', "images/"+towns[town_numbers[i]].photo);
            let statBlock = document.createElement('div');
            statBlock.className="info"
            let townName = document.createElement('div');
            townName.className="name"

            townName.appendChild(h2);
            townName.appendChild(motto);

            
            statBlock.appendChild(year);
            statBlock.appendChild(population);
            statBlock.appendChild(rain);
            card.appendChild(townName);
            card.appendChild(statBlock);
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);
        }
    });