const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        console.table(jsonObject);  
        const towns = jsonObject['towns'];
         let town=[5,6, 1]
        for (let i = 0; i < town.length; i++ ) 
        {
            let sectionCard= document.createElement('section');
            let h2 = document.createElement('h2');
            h2.textContent = towns[town[i]].name;
            let motto=document.createElement('h3');
            motto.textContent= towns[town[i]].motto;
            let year =document.createElement('p');
            year.textContent= "Year Founded: " + towns[town[i]].yearFounded;
            let population =document.createElement('p');
            population.textContent= "Population: " + towns[town[i]].currentPopulation;
            let rain =document.createElement('p');
            rain.textContent= "Annual Rain Fall: " + towns[town[i]].averageRainfall;
            let image=document.createElement('img');
            image.setAttribute('src', "images/"+towns[town[i]].photo);
            let statBlock = document.createElement('div');
            statBlock.className="info"
            let townName = document.createElement('div');
            townName.className="name"

            townName.appendChild(h2);
            townName.appendChild(motto);
            statBlock.appendChild(year);
            statBlock.appendChild(population);
            statBlock.appendChild(rain);
            sectionCard.appendChild(townName);
            sectionCard.appendChild(statBlock);
            sectionCard.appendChild(image);

            document.querySelector('div.cards').appendChild(sectionCard);
        }
    });