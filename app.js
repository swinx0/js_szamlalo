//Alapérték felvétele
let count = 0;

//Gombok és egyéb elemek eltárolása változókba
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
//const decrease = document.getElementById("decrease");
//const reset = document.getElementById("reset");
//const increase = document.getElementById("increase");


//Ciklussal végiglépkedek az eltárolt gombokon, amelyeken rajta van a .btn class
btns.forEach((btn)=>{

    //Az összes gomb közül ,amelyeket bejárok a ciklussal, azt kattintottam meg amelyik az aktuális ciklusfutáskor jön a sorba (első ciklusfutás -> 0.indexű gomb (decrease) stb...)
    btn.addEventListener("click", (e)=>{

        //Az éppen aktuálisan megkattintott gombon milyen class/classok vannak
        const style = e.currentTarget.classList;

        //Ha az aktuálisan megkattintott gombok classai közül tarzalmazza a "decrease" classt
        if(style.contains("decrease")){

            //Csökkentjük az alapértéket
            count--;
        }
        //... "increase" classt
        else if(style.contains("increase")){

            //Növeljük az alapértéket
            count++;
        }
        //Ha ezek közül egyik sem akkor marad a "reset" class
        else{

            //Visszaállítjuk az alapértéket
            count = 0;
        }


        //Színek hozzáadása a spanhez
        if(count > 0){

            value.style.color="green";
        }
        else if(count < 0){

            value.style.color="red";
        }
        else{

            value.style.color="black";
        }


        value.textContent = count;
    })

})



