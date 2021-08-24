// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

let buttonWrapper = document.querySelector("#buttons");

   buttonWrapper.addEventListener("click", (e) =>  {
       if (e.target.localName == "button"){
        let buttons = document.querySelectorAll("#buttons button");
        buttons.forEach ((button) => {
            button.removeAttribute("style");
        })
        e.target.style.backgroundColor = "#7f7";
       };
   });


}); // Afslutter: DOMContentLoaded