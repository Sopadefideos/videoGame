let botones =['btn-pj-1', 'btn-pj-2', 'btn-pj-3', 'btn-pj-4', 'btn-pj-5', 'btn-pj-6', 'btn-pj-7', 'btn-pj-8' , 'btn-pj-9', 'btn-pj-10'];
let habilidades = ['HABILIDADES', 'HABILIDADES', 'HABILIDADES', 'HABILIDADES', 'HABILIDADES', 'HABILIDADES', 'HABILIDADES', 'HABILIDADES', 'HABILIDADES', 'HABILIDADES'];
let descripciones = ['Reina de las arpías y una de las principales antagonistas de la futura serie de animación “Irae Spartae”. Su dominio del viento la hace una adversaria muy peligrosa a largas distancias y sus garras pueden causar grandes daños en sus victimas.',
'Protagonista de la futura serie de animación “Dungeon Seeker”. Se trata de una exploradora de reliquias procedentes de civilizaciones ya desaparecidas, con el objetivo de intentar ayudar a la humanidad gracias a ellas. Sus herramientas son una pala y un látigo de desplazamiento.',
'Su nombre lo dice todo. Todo un misterio inacabado.',
'Protagonista de la futura serie de animación “Cybertopia”. Techney se trata de un pequeño ingeniero procedente de la ciudad robótica conocida como Elysium. Sus invenciones son muy conocidas en la ciudad y han ayudado en más de una ocasión al avance de la misma. Se trata de un rival muy peligroso a largas y medias distancias.',
'Nacido de la accidentada mezcla entre ADN humano y de tiburón, esta bestia se encarga de garantizar la seguridad en muchos de los rincones del océano. Se caracteriza por ser totalmente impredecible en combate cercano gracias a su fuerza bruta y letal dentadura.',
'Miembro de la raza alienígena Xenobites y principal antagonista de Clark y su escuadra. Se caracteriza por su capacidad para causar grandes estragos gracias a sus tentáculos y tecnología avanzada.',
'Protagonista de la futura serie de animación de fantasía mediaval “Legends of Aurixia”. Procedente de una de las ciudades más importantes de su reino. Su carácter fuerte le permite enfrentarse a cualquier peligro sin ningún miedo. Que su estilo estético no te despiste.',
'Procedente de un proyecto cancelado del estudio. Ellaine se caracteriza por su actitud errática y agresiva. Su arma característica es una guadaña, lo que la hace una oponente muy peligrosa a media distancia.',
'Protagonista de la futura serie de animación espacial “Deep Space”. Se trata del líder de la escuadra primate de exploración 5 y se caracteriza por ser un capitán decidido y valiente. Su capacidad para utilizar las herramientas a su disposición son excelentes.',
'Protagonista de la futura serie de animación “Dark Seas”. Barbasucia fue considerado uno de los mayores piratas que jamás hayan navegado los siete mares, pero encontró su final en una de sus tantas aventuras. Ahora ha vuelto a la vida para terminar el viaje que una vez empezó. Barbasucia se caracteriza por su uso gran uso de cañón y espada.',];
let Nombres =['HERA', 'NAKE','MR. BOCETO','TECHNEY', 'ULDAH', "RAG'HOR", 'SYR AIMERIC', 'ELLAINE', 'CLARK', 'EIGHARD BARBASUCIA'];
let imagenHabilidades = ['./includes/BOTONES APARTADO PERSONAJE/PERSONAJES/HERA_ARPIA/HABILIDADES-ARPIA.gif',
'./includes/BOTONES APARTADO PERSONAJE/PERSONAJES/NAKE_EXPLORADORA/HABILIDADES-EXPLORADORA.gif',
'./includes/BOTONES APARTADO PERSONAJE/PERSONAJES/MR_BOCETO_BOCETO/HABILIDADES-MR-BOCETO.gif',
'./includes/BOTONES APARTADO PERSONAJE/PERSONAJES/TECHNEY_ROBOT/HABILIDADES-ROBOT.gif',
'./includes/BOTONES APARTADO PERSONAJE/PERSONAJES/ULDAH_TIBURON/HABILIDADES-TIBURON.gif',
'./includes/BOTONES APARTADO PERSONAJE/PERSONAJES/RAG´HUR_ALIEN/HABILIDADES-ALIEN.gif',
'./includes/BOTONES APARTADO PERSONAJE/PERSONAJES/SYR_AIMERIC_CABALLERO_MEDIEVAL/HABILIDADES-ESPARTANO.gif',
'./includes/BOTONES APARTADO PERSONAJE/PERSONAJES/ELLAINE_MUJER_CALABAZA/HABILIDADES-CALABAZA.gif',
'./includes/BOTONES APARTADO PERSONAJE/PERSONAJES/CLARK_MONO/HABILIDADES-MONO.gif',
'./includes/BOTONES APARTADO PERSONAJE/PERSONAJES/EIGHARD_BARBASUCIA_PIRATA_ESQUELETO/HABILIDADES-PIRATA.gif'];
let imagenPersonaje = [
'./includes/BOTONES APARTADO PERSONAJE/PERSONAJES FINAL/idlearpia.gif',
'./includes/BOTONES APARTADO PERSONAJE/PERSONAJES FINAL/idleexploradora.gif',
'./includes/BOTONES APARTADO PERSONAJE/PERSONAJES FINAL/idlesketch-man.gif',
'./includes/BOTONES APARTADO PERSONAJE/PERSONAJES FINAL/idlerobot.gif',
'./includes/BOTONES APARTADO PERSONAJE/PERSONAJES FINAL/idletiburon.gif',
'./includes/BOTONES APARTADO PERSONAJE/PERSONAJES FINAL/idlealien.gif',
'./includes/BOTONES APARTADO PERSONAJE/PERSONAJES FINAL/idlecaballero.gif',
'./includes/BOTONES APARTADO PERSONAJE/PERSONAJES FINAL/idlecalabaza.gif',
'./includes/BOTONES APARTADO PERSONAJE/PERSONAJES FINAL/idlemono.gif',
'./includes/BOTONES APARTADO PERSONAJE/PERSONAJES FINAL/idlepirata.gif'
];



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
    let parrafoNombre = document.getElementById('parrafo-Nombre');
    let cajaDescripcion = document.getElementById('caja-Descripcion');
    let parrafoHabilidades = document.getElementById('parrafo-Habilidades');
    let imagenPj = document.getElementById('fotoPJ');

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
    imgHabilidad.src = imagenHabilidades[indiceDelBoton];
    parrafoNombre.innerHTML = Nombres[indiceDelBoton];
    cajaDescripcion.innerHTML = descripciones[indiceDelBoton];
    parrafoHabilidades.innerHTML = habilidades[indiceDelBoton];
    imagenPj.src = imagenPersonaje[indiceDelBoton];


  }