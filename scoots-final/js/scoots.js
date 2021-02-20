
const requestURL = "https://eldersud.github.io/eldersud.github.io/scoots-final/data/price.json";
fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        const rentals = jsonObject["rentals"]; 
        for (let i = 0; i < rentals.length; i++ ){
         console.log(rentals[i].reservedhalf);   
    let rentaldetail = document.createElement("section");
    let tittle= document.createElement("h2");
    tittle.textContent=rentals[i].model + ' ' + rentals[i].type;
    rentaldetail.appendChild(tittle);
    let passengers=document.createElement("p");
    passengers.textContent= rentals[i].persons;
    rentaldetail.appendChild(passengers);
    let rentalh=document.createElement("p");
    rentalh.textContent=rentals[i].rhalf;
    rentaldetail.appendChild(rentalh);
    let rentalf=document.createElement("p");
    rentalf.textContent= rentals[i].rfull;
    rentaldetail.appendChild(rentalf);
    let walkh=document.createElement("p");
    walkh.textContent= rentals[i].whalf;
    rentaldetail.appendChild(walkh);
    let walkf=document.createElement("p");
    walkf.textContent= rentals[i].wfull;
    rentaldetail.appendChild(walkf);
    let img=document.createElement("img");
    img.setAttribute("src", rentals[i].img);
    img.setAttribute("alt", rentals[i].model + "" + rentals[i].type +"" + i+1);
    rentaldetail.appendChild(img);
    document.querySelector("table.rentaloptions").appendChild(rentaldetail);


        }
      });


