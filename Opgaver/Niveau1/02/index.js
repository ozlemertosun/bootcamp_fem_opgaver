// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

    /* der er lavet et p-tag i html-filen, som har fået en variabel*/
    
    const visResultat = document.getElementById("math-result");
   
    function beregnForhold (a, b) {
        visResultat.textContent = a/b;
    };

    beregnForhold(4, 3);
 


    //ekstraopgave:
  /*   const visResultat = document.getElementById("math-result");

    function beregnForhold2 (a, b){
            if (b == 0){
            return visResultat.textContent = "null";
        } else {
            return visResultat.textContent = a/b;
        }
    };

    beregnForhold2(4, 0);  
    console.log(visResultat);  */

    
    }); // Afslutter: DOMContentLoaded