
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".paginaUno",
    start: "0%",
    end: "100%",    
    scrub: true,
    pin: true,

  },
});
tl.fromTo(".flechaAbajo", { opacity: 1, }, { opacity: 0, duration: 1 });
tl.fromTo(".paginaUno",
  { clipPath: 'circle(8%)' },
  { clipPath: 'circle(100%)', duration: 8 });
tl.fromTo(".logoFiT", { scale: 1 }, { scale: 0, opacity: 0, duration: 4 });
tl.fromTo(".titulo", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 4 });
tl.fromTo(".subtitulo", { opacity: 0 }, { opacity: 1, duration: 4 });

