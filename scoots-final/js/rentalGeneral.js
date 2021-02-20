
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
    let passengers=document.createElement("h3");
    passengers.textContent= rentals[i].motto;
    rentaldiv.appendChild(passengers);
    let rentalh=document.createElement("h3");
    rentalh.textContent=rentals[i].persons+" passengers";
    rentaldiv.appendChild(rentalh);
    let rentalf=document.createElement("h3");
    rentalf.textContent= rentals[i].price;
    rentaldiv.appendChild(rentalf);
    let img=document.createElement("img");
    img.setAttribute("src", rentals[i].img);
    img.setAttribute("alt", rentals[i].model + "" + rentals[i].type +"" + i+1);
    rentaldetail.appendChild(img);
    document.querySelector("div.cards").appendChild(rentaldetail);


        }
      });

