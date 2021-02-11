var currentYear = new Date().getFullYear();
//  currentYear
document.getElementById("currentYear").innerHTML = currentYear.toString();


//current date
const options = {weekday: 'long', day: 'numeric', month: 'long', year:'numeric'};
document.getElementById('lastup').textContent = new Date().toLocaleDateString('en-US', options);

//ham
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.ul-nav')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// mid resizing 
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

