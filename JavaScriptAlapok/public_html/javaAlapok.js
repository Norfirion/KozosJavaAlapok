var tomb=[];

function feltolt(db){
    tomb=[];
    
    for (var i = 0; i < db; i++) {
        var vel=Math.floor(Math.random()*10+1);
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
    var adat=document.getElementById("adat").value;
    feltolt(adat);
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



