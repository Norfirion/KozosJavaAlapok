var tomb = [];

function feltolt(db, tol, ig){
    tomb = [];
    var intervall = ig - parseInt(tol);
    for (var i = 0; i < db; i++) {
        var vel = Math.floor(Math.random() * intervall) + parseInt(tol);
        tomb[i]=vel;
    }
    console.log(tomb);
    document.getElementById("szoveg").innerHTML="A tomb elemei: "+tomb.join(";");
}
// 1. Feladat
function osszegzes(){        
    var osszeg=0;
    for (var i = 0; i < tomb.length; i++) {
        osszeg += tomb[i];
    }
    document.getElementById("osszeg").innerHTML = "Az elemek összege: " + osszeg;
}
// 2. Feladat
function paros() {

}
// 3. Feladat
function forditTomb() {
    var fTomb = [];
    var j = 0;
    for (var i = tomb.length; i > -1; i--) {
        fTomb[j] = tomb[i];
        j++;
    }
    console.log(fTomb);
    document.getElementById("forditottTomb").innerHTML="A tömb elemei fordítva: "+fTomb.join(";");
}
// 4. Feladat
function otteloszthato() {
    var oszthat = 0;
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] % 5 === 0) {
            oszthat += 1;
        }
    }
    document.getElementById("oszthato").innerHTML = "5-tel oszthatók száma: " + oszthat;
}
// 5. Feladat
function legNagyobb() {
    var vel2 =0;
    for (var i = 0; i < tomb.length; i++) {
        if(tomb[i]>vel2){
            vel2 = tomb[i] ;
        }
    }
    document.getElementById("legn").innerHTML = "A legnagyobb szám: " + vel2;

}
// 6. Feladat
function kettoHarom() {
    var vane = false;
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] % 3 == 0) {
            if (tomb[i] % 2 == 0) {
                vane = true;
            }
        }
    }
    if (vane) {
        document.getElementById("kettoHaromOszt").innerHTML = "VAN 2-vel és 3-al is osztható szám benne!";
    } else {
        document.getElementById("kettoHaromOszt").innerHTML = "NINCS 2-vel és 3-al is osztható szám benne!";
    }
}
// 7. Feladat
function negyzetSzam() {

}
// 8. Feladat
function negyzetOssz() {

}


function dolgozz() {

    //alert("Jó reggelt!");
    //document.write("Hello");
    var adat = document.getElementById("adat").value;

    var kezdo = document.getElementById("kezdo").value;
    var vegzo = parseInt(document.getElementById("vegzo").value) + 1;

    feltolt(adat, kezdo, vegzo);
    osszegzes();
    forditTomb();
    kettoHarom();
    otteloszthato();
    negyzetSzam();
    legNagyobb();

//    tomb[0]=2;
//    tomb[1]="Kismacska";
//    tomb[2]=false;
//    tomb[3]=5.4;
//    var tomb = new Arrey(34);

}

function init() {
    console.log("Itt vagyok!");
    document.getElementById("szoveg").innerHTML = "A JS dolgozik! ";
    document.getElementById("ok").addEventListener("click", dolgozz);
}

window.addEventListener("load", init);



