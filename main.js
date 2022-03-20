let airj1 = "img/air-jordan-1-high-zoom-cmft-tropical-twist-1-400.jpg";
let airj2 = "img/air-jordan-1-mid-black-noble-red-w-1-1000.jpg";
let airj3 = "img/air-jordan-1-mid-bright-citrus-1-1000-1.jpg";
let airj4 = "img/air-jordan-1-mid-carbon-fiber-1-1000-1.jpg";
let airj5 = "img/air-jordan-1-mid-dutch-green-1-400.jpg";
let airj6 = "img/air-jordan-1-mid-grey-camo-1-1000-1.jpg";
let airj7 = "img/air-jordan-1-mid-light-smoke-grey-gs-1-1000.jpg";
let airj8 = "img/air-jordan-1-retro-high-court-purple-w-1-400.jpg";

let listaAirJ = [airj1, airj2, airj3, airj4, airj5, airj6, airj7, airj8]

function exibeAirJ(){
  let elementoShoes = document.getElementById("shoes");
  let shoes = "";  
  for (let i = 0; i < listaAirJ.length; i++){
  shoes += "<div class='shoes__box'><img class='shoes__img' src=" + listaAirJ[i] + "></div>"; 

elementoShoes.innerHTML = shoes;
}};

exibeAirJ();

