// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {


function skjulElementViaCssSelector (cssSelector){
    const hideCssElement = document.querySelector(cssSelector);
    hideCssElement.style.display = "none";
};
skjulElementViaCssSelector("#hideElement");
//#hideElement er id fra html-filen

//denne version er der tilføjet et if statement, som kan hjælpe os med at validering (true/false);
/* function skjulElementViaCssSelector (cssSelector){
    const hideCssElement = document.querySelector(cssSelector);
    if (hideCssElement){
        hideCssElement.style.display = "none";
    }
};
skjulElementViaCssSelector("#hideElement"); */


}); // Afslutter: DOMContentLoaded