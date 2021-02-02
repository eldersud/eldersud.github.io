var currentYear = new Date().getFullYear();
// console.log('currentYear: ', currentYear);
document.getElementById("currentYear").innerHTML = currentYear.toString();


//Getting the current date
const options = {weekday: 'long', day: 'numeric', month: 'long', year:'numeric'};
document.getElementById('lastup').textContent = new Date().toLocaleDateString('en-US', options);

//Making the ham buttom works <<credits: https://codepen.io/blazzard-jason/pen/gmGxaj/>>
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.ul-nav')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

