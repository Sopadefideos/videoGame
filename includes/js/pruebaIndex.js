const tarjeta1 = document.querySelector('#tarj1');const tarjeta2 = document.querySelector('#tarj2');const tarjeta3 = document.querySelector('#tarj3');const tarjeta4 = document.querySelector('#tarj4');const tarjeta5 = document.querySelector('#tarj5');const tarjeta6 = document.querySelector('#tarj6');const tarjeta7 = document.querySelector('#tarj7');const tarjeta8 = document.querySelector('#tarj8');const tarjeta9 = document.querySelector('#tarj9');const tarjeta10 = document.querySelector('#tarj10');
const fundaTarjeta1 = document.querySelector('#funda1');const fundaTarjeta2 = document.querySelector('#funda2');const fundaTarjeta3 = document.querySelector('#funda3');const fundaTarjeta4 = document.querySelector('#funda4');const fundaTarjeta5 = document.querySelector('#funda5');const fundaTarjeta6 = document.querySelector('#funda6');const fundaTarjeta7 = document.querySelector('#funda7');const fundaTarjeta8 = document.querySelector('#funda8');const fundaTarjeta9 = document.querySelector('#funda9');const fundaTarjeta10 = document.querySelector('#funda10');

const nombre1 = document.querySelector("#nombreTarjeta1");const nombre2 = document.querySelector("#nombreTarjeta2");const nombre3 = document.querySelector("#nombreTarjeta3");const nombre4 = document.querySelector("#nombreTarjeta4");const nombre5 = document.querySelector("#nombreTarjeta5");const nombre6 = document.querySelector("#nombreTarjeta6");const nombre7 = document.querySelector("#nombreTarjeta7");const nombre8 = document.querySelector("#nombreTarjeta8");const nombre9 = document.querySelector("#nombreTarjeta1");const nombre10 = document.querySelector("#nombreTarjeta10");
const pj1 = document.querySelector("#imgTarjeta1");const pj2 = document.querySelector("#imgTarjeta2");const pj3 = document.querySelector("#imgTarjeta3");const pj4 = document.querySelector("#imgTarjeta4");const pj5 = document.querySelector("#imgTarjeta5");const pj6 = document.querySelector("#imgTarjeta6");const pj7 = document.querySelector("#imgTarjeta7");const pj8 = document.querySelector("#imgTarjeta8");const pj9 = document.querySelector("#imgTarjeta9");const pjDiez = document.querySelector('#imgTarjeta10');


fundaTarjeta1.addEventListener('mousemove', (e)=>{
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
    tarjeta1.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});fundaTarjeta2.addEventListener('mousemove', (e)=>{
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
    tarjeta2.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});fundaTarjeta3.addEventListener('mousemove', (e)=>{
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
    tarjeta3.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});fundaTarjeta4.addEventListener('mousemove', (e)=>{
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
    tarjeta4.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});fundaTarjeta5.addEventListener('mousemove', (e)=>{
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
    tarjeta5.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});fundaTarjeta6.addEventListener('mousemove', (e)=>{
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
    tarjeta6.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});fundaTarjeta7.addEventListener('mousemove', (e)=>{
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
    tarjeta7.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});fundaTarjeta8.addEventListener('mousemove', (e)=>{
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
    tarjeta8.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});fundaTarjeta9.addEventListener('mousemove', (e)=>{
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
    tarjeta9.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});fundaTarjeta10.addEventListener('mousemove', (e)=>{
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
    tarjeta10.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

fundaTarjeta1.addEventListener("mouseenter", (e) => {
    tarjeta1.style.transition = "none";    
    nombre1.style.transform = "translateZ(150px)";
    pj1.style.transform = "scale(1.2)";
    tarjeta1.classList.add('overflow-visible');
  });fundaTarjeta2.addEventListener("mouseenter", (e) => {
    tarjeta2.style.transition = "none";    
    nombre2.style.transform = "translateZ(150px)";
    pj2.style.transform = "scale(1.2)";
    tarjeta2.classList.add('overflow-visible');
  });fundaTarjeta3.addEventListener("mouseenter", (e) => {
    tarjeta3.style.transition = "none";    
    nombre3.style.transform = "translateZ(150px)";
    pj3.style.transform = "scale(1.2)";
    tarjeta3.classList.add('overflow-visible');
  });fundaTarjeta4.addEventListener("mouseenter", (e) => {
    tarjeta4.style.transition = "none";    
    nombre4.style.transform = "translateZ(150px)";
    pj4.style.transform = "scale(1.2)";
    tarjeta4.classList.add('overflow-visible');
  });fundaTarjeta5.addEventListener("mouseenter", (e) => {
    tarjeta5.style.transition = "none";    
    nombre5.style.transform = "translateZ(150px)";
    pj5.style.transform = "scale(1.2)";
    tarjeta5.classList.add('overflow-visible');
  });fundaTarjeta6.addEventListener("mouseenter", (e) => {
    tarjeta6.style.transition = "none";    
    nombre6.style.transform = "translateZ(150px)";
    pj6.style.transform = "scale(1.2)";
    tarjeta6.classList.add('overflow-visible');
  });fundaTarjeta7.addEventListener("mouseenter", (e) => {
    tarjeta7.style.transition = "none";    
    nombre7.style.transform = "translateZ(150px)";
    pj7.style.transform = "scale(1.2)";
    tarjeta7.classList.add('overflow-visible');
  });fundaTarjeta8.addEventListener("mouseenter", (e) => {
    tarjeta8.style.transition = "none";    
    nombre8.style.transform = "translateZ(150px)";
    pj8.style.transform = "scale(1.2)";
    tarjeta8.classList.add('overflow-visible');
  });fundaTarjeta9.addEventListener("mouseenter", (e) => {
    tarjeta9.style.transition = "none";    
    nombre9.style.transform = "translateZ(150px)";
    pj9.style.transform = "scale(1.2)";
    tarjeta9.classList.add('overflow-visible');
  });fundaTarjeta10.addEventListener("mouseenter", (e) => {
    tarjeta10.style.transition = "none";    
    nombre10.style.transform = "translateZ(150px)";
    pjDiez.style.transform = "scale(1.2)";
    tarjeta10.classList.add('overflow-visible');
  });

  fundaTarjeta1.addEventListener("mouseleave", (e) => {
    tarjeta1.style.transition = "all 0.5s ease";
    tarjeta1.style.transform = `rotateY(0deg) rotateX(0deg)`;    
    nombre1.style.transform = "translateZ(0px)";
    pj1.style.transform = "scale(1)";
    pj1.style.transition = "all 0.3s ease";
    pj1.classList.remove('overflow-visible');
  });fundaTarjeta2.addEventListener("mouseleave", (e) => {
    tarjeta2.style.transition = "all 0.5s ease";
    tarjeta2.style.transform = `rotateY(0deg) rotateX(0deg)`;    
    nombre2.style.transform = "translateZ(0px)";
    pj2.style.transform = "scale(1)";
    pj2.style.transition = "all 0.3s ease";
    pj2.classList.remove('overflow-visible');
  });fundaTarjeta3.addEventListener("mouseleave", (e) => {
    tarjeta3.style.transition = "all 0.5s ease";
    tarjeta3.style.transform = `rotateY(0deg) rotateX(0deg)`;    
    nombre3.style.transform = "translateZ(0px)";
    pj3.style.transform = "scale(1)";
    pj3.style.transition = "all 0.3s ease";
    pj3.classList.remove('overflow-visible');
  });fundaTarjeta4.addEventListener("mouseleave", (e) => {
    tarjeta4.style.transition = "all 0.5s ease";
    tarjeta4.style.transform = `rotateY(0deg) rotateX(0deg)`;    
    nombre4.style.transform = "translateZ(0px)";
    pj4.style.transform = "scale(1)";
    pj4.style.transition = "all 0.3s ease";
    pj4.classList.remove('overflow-visible');
  });fundaTarjeta5.addEventListener("mouseleave", (e) => {
    tarjeta5.style.transition = "all 0.5s ease";
    tarjeta5.style.transform = `rotateY(0deg) rotateX(0deg)`;    
    nombre5.style.transform = "translateZ(0px)";
    pj5.style.transform = "scale(1)";
    pj5.style.transition = "all 0.3s ease";
    pj5.classList.remove('overflow-visible');
  });fundaTarjeta6.addEventListener("mouseleave", (e) => {
    tarjeta6.style.transition = "all 0.5s ease";
    tarjeta6.style.transform = `rotateY(0deg) rotateX(0deg)`;    
    nombre6.style.transform = "translateZ(0px)";
    pj6.style.transform = "scale(1)";
    pj6.style.transition = "all 0.3s ease";
    pj6.classList.remove('overflow-visible');
  });fundaTarjeta7.addEventListener("mouseleave", (e) => {
    tarjeta7.style.transition = "all 0.5s ease";
    tarjeta7.style.transform = `rotateY(0deg) rotateX(0deg)`;    
    nombre7.style.transform = "translateZ(0px)";
    pj7.style.transform = "scale(1)";
    pj7.style.transition = "all 0.3s ease";
    pj7.classList.remove('overflow-visible');
  });fundaTarjeta8.addEventListener("mouseleave", (e) => {
    tarjeta8.style.transition = "all 0.5s ease";
    tarjeta8.style.transform = `rotateY(0deg) rotateX(0deg)`;    
    nombre8.style.transform = "translateZ(0px)";
    pj8.style.transform = "scale(1)";
    pj8.style.transition = "all 0.3s ease";
    pj8.classList.remove('overflow-visible');
  });fundaTarjeta9.addEventListener("mouseleave", (e) => {
    tarjeta9.style.transition = "all 0.5s ease";
    tarjeta9.style.transform = `rotateY(0deg) rotateX(0deg)`;    
    nombre9.style.transform = "translateZ(0px)";
    pj9.style.transform = "scale(1)";
    pj9.style.transition = "all 0.3s ease";
    pj9.classList.remove('overflow-visible');
  });fundaTarjeta10.addEventListener("mouseleave", (e) => {
    tarjeta10.style.transition = "all 0.5s ease";
    tarjeta10.style.transform = `rotateY(0deg) rotateX(0deg)`;    
    nombre10.style.transform = "translateZ(0px)";
    pjDiez.style.transform = "scale(1)";
    pjDiez.style.transition = "all 0.3s ease";
    pjDiez.classList.remove('overflow-visible');
  });