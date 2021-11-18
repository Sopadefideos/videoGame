let botones =['btn-pj-1', 'btn-pj-2', 'btn-pj-3', 'btn-pj-4', 'btn-pj-5', 'btn-pj-6', 'btn-pj-7', 'btn-pj-8' , 'btn-pj-9', 'btn-pj-10'];
let sources = ['./includes/BOTONES APARTADO PERSONAJE/PERSONAJES/HERA_ARPIA/HABILIDADES-ARPIA.gif',
'./includes/BOTONES APARTADO PERSONAJE/PERSONAJES/NAKE_EXPLORADORA/HABILIDADES-EXPLORADORA.gif',
'./includes/BOTONES APARTADO PERSONAJE/PERSONAJES/MR_BOCETO_BOCETO/HABILIDADES-MR-BOCETO.gif',
'./includes/BOTONES APARTADO PERSONAJE/PERSONAJES/TECHNEY_ROBOT/HABILIDADES-ROBOT.gif',
'./includes/BOTONES APARTADO PERSONAJE/PERSONAJES/ULDAH_TIBURON/HABILIDADES-TIBURON.gif',
'./includes/BOTONES APARTADO PERSONAJE/PERSONAJES/RAG´HUR_ALIEN/HABILIDADES-ALIEN.gif',
'./includes/BOTONES APARTADO PERSONAJE/PERSONAJES/SYR_AIMERIC_CABALLERO_MEDIEVAL/HABILIDADES-ESPARTANO.gif',
'./includes/BOTONES APARTADO PERSONAJE/PERSONAJES/ELLAINE_MUJER_CALABAZA/HABILIDADES-CALABAZA.gif',
'./includes/BOTONES APARTADO PERSONAJE/PERSONAJES/CLARK_MONO/HABILIDADES-MONO.gif',
'./includes/BOTONES APARTADO PERSONAJE/PERSONAJES/EIGHARD_BARBASUCIA_PIRATA_ESQUELETO/HABILIDADES-PIRATA.gif'];
  console.log(botones.indexOf('btn-pj-1'));
  let imagenDinamica = document.getElementById('fotoPJjs');
  //Array con las fotos de los PJ
  let claseImagenDinamica = document.getElementsByClassName('fotoPJjs');
  //Array con las imagenes de las habilidades
  let habilidadesPjs = document.getElementsByClassName('img-Habilidades');
  //let imgHabilidad = document.getElementById('img-habilidad');
  console.log(habilidadesPjs[2]);
  console.log(habilidadesPjs[3]);
  console.log(habilidadesPjs[4]);

  let botonesPj= document.getElementsByClassName('btnPJ');
  console.log(imagenDinamica);

  function muestraImg(clicked_id){  
    

    let indiceDelBoton = botones.indexOf(clicked_id);
    let imgHabilidad = document.getElementById('img-habilidad');
    /*console.log(indiceDelBoton);           
    for(let i = 0; i<botones.length;i++){
      //claseImagenDinamica[i].style.display="none";
      habilidadesPjs[i].style.display="none";
      console.log(i);  
      if(i==claseImagenDinamica.length-1) {
          console.log("hice el for");
      }   
    };
    //claseImagenDinamica[indiceDelBoton].style.display="initial";   
    habilidadesPjs[indiceDelBoton].style.display="initial";

    let contenido = habilidadesPjs[indiceDelBoton].innerHTML;
    habilidadesPjs[indiceDelBoton].innerHTML = contenido;
    console.log(habilidadesPjs);*/
    imgHabilidad.src = sources[indiceDelBoton];

  }