// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

let colorArray = ["#eee", "#7f7"];

let button = document.getElementById("my-button");

button.addEventListener("click", (e) => {
    e.target.style.backgroundColor = colorArray[1];
    colorArray.reverse();
});


}); // Afslutter: DOMContentLoaded