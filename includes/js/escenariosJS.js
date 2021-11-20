let movimientoAmarillo = [
  '../img/BOTONES\ APARTADO\ ESCENARIO/MOVIMIENTO-RECTANGULO-AMARILLO.gif',
  '../img//BOTONES\ APARTADO\ ESCENARIO/MOVIMIENTO-RECTANGULO-AMARILLO-copia.gif'];
let cambioAmarillo = true;
let botones = ['btn-pj-1', 'btn-pj-2', 'btn-pj-3', 'btn-pj-4', 'btn-pj-5', 'btn-pj-6', 'btn-pj-7', 'btn-pj-8', 'btn-pj-9', 'btn-pj-10'];
let nombres = ['AFUERAS DE ESPARTA', 'JUNGLA SIN REY', 'BOCETO', 'ELYSIUM', 'ATLANTIS', "RAG'HOR", 'PRADERAS DE AURIXIA', 'CEMENTERIO NO HOPE', 'PATA DEL MONO', 'BAHÍA DEL RENEGADO'];
let escenarios = [
  '../img/BOTONES APARTADO ESCENARIO/ESCENARIOS/ARPIA_AFUERASDEESPARTA_ESCENARIOGRECIA/ESCENARIO-GRECIA.mp4',
  '../img/BOTONES APARTADO ESCENARIO/ESCENARIOS/EXPLORADORA_JUNGLASINREY_ESCENARIOSELVA/ESCENARIO-JUNGLA.mp4',
  '../img/BOTONES APARTADO ESCENARIO/ESCENARIOS/MR_BOCETO_BOCETO/ESCENARIO-MRBOCETO.mp4',
  '../img/BOTONES APARTADO ESCENARIO/ESCENARIOS/ROBOT_ELYSIUM_ESCENARIOFABRICAROBOT/ESCENARIO-ROBOT.mp4',
  '../img/BOTONES APARTADO ESCENARIO/ESCENARIOS/TIBURON_ATLANTIS_ESCENARIOFONDOMARINO/ESCENARIO-FONDOMARINO.mp4',
  '../img/BOTONES APARTADO ESCENARIO/ESCENARIOS/RAG´HUR_ALIEN/ESCENARIO-ALIEN.mp4',
  '../img/BOTONES APARTADO ESCENARIO/ESCENARIOS/CABALLEROMEDIEVAL_PRADERASDEAURIXIA_ESCENARIOCASTILLO/ESCENARIO-MEDIEVAL.mp4',
  '../img/BOTONES APARTADO ESCENARIO/ESCENARIOS/MUJERCALABAZA_CEMENTERIONOHOPE_ESCENARIOCEMENTERIO/ESCENARIO-CALABAZA.mp4',
  '../img/BOTONES APARTADO ESCENARIO/ESCENARIOS/MONO_PATADELMONO_ESCENARIOESPACIAL/ESCENARIO-MONO.mp4',
  '../img/BOTONES APARTADO ESCENARIO/ESCENARIOS/PIRATAESQUELETO_BAHIADELRENEGADO_ESCENARIOPIRATA/ESCENARIO-PIRATA.mp4'];
let descripcion = [
  'Siempre protegida por los diferentes guerreros y guerreras que provienen de esta región. Desde casas en ruinas a palacios, lo mitológico siempre se encuentra presente por estos lares.',
  'Un aura de misterio rodea esta jungla y se trata de un destino al que muchos exploradores han ido, sin que ninguno vuelva. Se dice que una poderosa reliquia yace escondida en el corazón de la jungla.',
  'Boceto sin terminar que parece representar un pequeño estudio, lleno de dibujos que nunca llegaron a completarse. Un aura de tristeza rodea este lugar, en el cual tanto sueños nunca llegaron a hacerse realidad.',
  'Protagonista de la futura serie de animación “Cybertopia”. Techney se trata de un pequeño ingeniero procedente de la ciudad robótica conocida como Elysium. Sus invenciones son muy conocidas en la ciudad y han ayudado en más de una ocasión al avance de la misma. Se trata de un rival muy peligroso a largas y medias distancias gracias a su capacidad para zonear a sus contrincantes fácilmente.',
  'La gran ciudad sumergida de las leyendas, siempre rodeada de misterios y eventos excepcionales. Los habitantes de la ciudad se pueden observar vigilando la zona de vez en cuando, además del resto de fauna que ha hecho los alrededores de la ciudad su hogar.',
  'Miembro de la raza alienígena Xenobites y principal antagonista de Clark y su escuadra. Se caracteriza por su capacidad para causar grandes estragos gracias a sus tentáculos y tecnología avanzada.',
  'Las grandes praderas del ilustre reino, escenario de cientos de batallas y aventuras. Caballeros, aventureros o comerciantes atraviesan estas praderas diariamente para poder acceder a Aurixia, cuyo magnífico castillo puede ser visto al horizonte.',
  'El mausoleo a lo alto de la colina sirve como puesto de vigía para mantener en raya a los diferentes fantasmas y otros seres que han hecho del cementerio su hogar. No es un lugar realmente agradable por el que ir de paseo.',
  'Base madre de la brigada primate espacial. Todas las escuadras de exploración se reúnen en esta base para descansar, informar sobre los diferentes descubrimientos durante sus aventuras y para disfrutar de unas bonitas vistas.',
  'Uno de los puertos comerciales del mercado negro más importante de los siete mares. Cientos de piratas cruzan por aquí, ya sea para hacer negocios con contactos cuestionables o para relajarse un rato en uno de los diferentes establecimientos de la zona.']
function muestraImg(clicked_id) {
  //let fecha = Date();
  let parrafoNombre = document.getElementById('parrafo-Nombre');
  let parrafoDescripcion = document.getElementById('caja-Descripcion');
  let giratorio = document.getElementById('img-cuadradaGif');
  let indiceDelBoton = botones.indexOf(clicked_id);
  let cuadradoEscenario = document.getElementById('img-cuadradaEscenario');
  //giratorio.src = "./../includes/BOTONES\ APARTADO\ ESCENARIO/MOVIMIENTO-RECTANGULO-AMARILLO.gif";
  if (cambioAmarillo == true) {
    giratorio.src = movimientoAmarillo[1];
    cambioAmarillo = false;
  } else {
    giratorio.src = movimientoAmarillo[0];
    cambioAmarillo = true;
  }
  cuadradoEscenario.src = escenarios[indiceDelBoton];
  parrafoNombre.innerHTML = nombres[indiceDelBoton];
  parrafoDescripcion.innerHTML = descripcion[indiceDelBoton];

}