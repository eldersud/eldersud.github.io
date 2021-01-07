var currentYear = new Date().getFullYear();
// console.log('currentYear: ', currentYear);
document.getElementById("currentYear").innerHTML = currentYear.toString();
document.getElementById("lastup").innerHTML = "Last Modified "+document.lastModified.toString();