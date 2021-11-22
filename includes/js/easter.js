let str = new Array();
let ultimosCinco;
let ultimosCincoStr;
let cancion = document.getElementById('cancionEaster');
let video = document.getElementById('videoEgg');
let botonesDelEasterEgg = ['funda1','funda2','funda3','funda4','funda5','funda6','funda7','funda8','funda9','funda10'];

function secreto(clicked_id) {
    let indiceEasterEgg = botonesDelEasterEgg.indexOf(clicked_id);
    //console.log(indiceEasterEgg);
    str.push(indiceEasterEgg);
    console.log(str);
    if(str.length>=6){
        ultimosCinco = str.slice(str.length-6);
        ultimosCincoStr= ultimosCinco.toString();
        if(ultimosCincoStr == "2,9,8,5,6,7"){
            video.style.display="initial";
            video.style.position="absolute";
            video.style.zIndex="10";
            video.play();      
        }
    }
}