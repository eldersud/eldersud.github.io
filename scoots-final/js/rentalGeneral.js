
const requestURL = "https://eldersud.github.io/eldersud.github.io/scoots-final/data/rentinfo.json";
fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        const rentals = jsonObject["rentinfo"]; 
        for (let i = 0; i < rentals.length; i++ ){
         console.log(rentals[i].reservedhalf);   
    let rentaldetail = document.createElement("section");
    let rentaldiv = document.createElement("div");
    rentaldetail.appendChild(rentaldiv);
    let tittle= document.createElement("h2");
    tittle.textContent=rentals[i].Type;
    rentaldiv.appendChild(tittle);
    let motto=document.createElement("h3");
    motto.textContent= rentals[i].motto;
    rentaldiv.appendChild(motto);
    let passenger=document.createElement("h3");
    passenger.textContent=rentals[i].persons+" passengers";
    rentaldiv.appendChild(passenger);
    let money=document.createElement("h3");
    money.textContent= rentals[i].price;
    rentaldiv.appendChild(money);
    let img=document.createElement("img");
    img.setAttribute("src", rentals[i].img);
    img.setAttribute("alt", rentals[i].Type);
    rentaldetail.appendChild(img);
    document.querySelector("div.cards").appendChild(rentaldetail);


        }
      });

