var tomb=[];

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
function osszegzes(){        
    var osszeg=0;
    for (var i = 0; i < tomb.length; i++) {
        osszeg+=tomb[i];
    }
    document.getElementById("osszeg").innerHTML="Az elemek összege: " + osszeg;
}

function dolgozz(){

    //alert("Jó reggelt!");
    //document.write("Hello");
    var adat = document.getElementById("adat").value;
    var kezdo = document.getElementById("kezdo").value;
    var vegzo = parseInt(document.getElementById("vegzo").value) + 1;
    feltolt(adat, kezdo, vegzo);
    osszegzes();
    
//    tomb[0]=2;
//    tomb[1]="Kismacska";
//    tomb[2]=false;
//    tomb[3]=5.4;
//    var tomb = new Arrey(34);
    
}

function init(){
console.log("Itt vagyok!");
document.getElementById("szoveg").innerHTML="A JS dolgozik! ";
document.getElementById("ok").addEventListener("click",dolgozz);
}

window.addEventListener("load", init);



