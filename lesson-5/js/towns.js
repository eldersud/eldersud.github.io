const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];

        let town_numbers=[5,6, 1]
        for (let i = 0; i < town_numbers.length; i++ ) 
        {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            h2.textContent = towns[town_numbers[i]].name;
            let motto=document.createElement('h3');
            motto.textContent= towns[town_numbers[i]].motto;
            let span1 =document.createElement('p');
            span1.textContent= "Year Founded: " + towns[town_numbers[i]].yearFounded;
            let span2 =document.createElement('p');
            span2.textContent= "Population: " + towns[town_numbers[i]].currentPopulation;
            let span3 =document.createElement('p');
            span3.textContent= "Annual Rain Fall: " + towns[town_numbers[i]].averageRainfall;
            let image=document.createElement('img');
            image.setAttribute('src', "images/"+towns[town_numbers[i]].photo);
            let statBlock = document.createElement('div');
            statBlock.className="info"
            let townName = document.createElement('div');
            townName.className="name"

            townName.appendChild(h2);
            townName.appendChild(motto);

            
            statBlock.appendChild(span1);
            statBlock.appendChild(span2);
            statBlock.appendChild(span3);
            card.appendChild(townName);
            card.appendChild(statBlock);
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);
        }
    });