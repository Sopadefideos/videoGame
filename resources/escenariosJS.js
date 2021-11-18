let movimientoAmarillo = [
'./includes/BOTONES\ APARTADO\ ESCENARIO/MOVIMIENTO-RECTANGULO-AMARILLO.gif',
'./includes/BOTONES\ APARTADO\ ESCENARIO/MOVIMIENTO-RECTANGULO-AMARILLO-copia.gif'];
let cambioAmarillo = true;
let botones =['btn-pj-1', 'btn-pj-2', 'btn-pj-3', 'btn-pj-4', 'btn-pj-5', 'btn-pj-6', 'btn-pj-7', 'btn-pj-8' , 'btn-pj-9', 'btn-pj-10'];
let nombres =['HERA', 'NAKE','MR. BOCETO','TECHNEY', 'ULDAH', "RAG'HOR", 'SYR AIMERIC', 'ELLAINE', 'CLARK', 'EIGHARD BARBASUCIA'];
let escenarios = [
'./includes/BOTONES APARTADO ESCENARIO/ESCENARIOS/ARPIA_AFUERASDEESPARTA_ESCENARIOGRECIA/ESCENARIO-GRECIA.gif',
'./includes/BOTONES APARTADO ESCENARIO/ESCENARIOS/EXPLORADORA_JUNGLASINREY_ESCENARIOSELVA/ESCENARIO-JUNGLA.gif',
'./includes/BOTONES APARTADO ESCENARIO/ESCENARIOS/MR_BOCETO_BOCETO/ESCENARIO-MRBOCETO.gif',
'./includes/BOTONES APARTADO ESCENARIO/ESCENARIOS/ROBOT_ELYSIUM_ESCENARIOFABRICAROBOT/ESCENARIO-ROBOT.gif',
'./includes/BOTONES APARTADO ESCENARIO/ESCENARIOS/TIBURON_ATLANTIS_ESCENARIOFONDOMARINO/ESCENARIO-FONDOMARINO.gif',
'./includes/BOTONES APARTADO ESCENARIO/ESCENARIOS/RAG´HUR_ALIEN/ESCENARIO-ALIEN.gif',
'./includes/BOTONES APARTADO ESCENARIO/ESCENARIOS/CABALLEROMEDIEVAL_PRADERASDEAURIXIA_ESCENARIOCASTILLO/ESCENARIO-MEDIEVAL.gif',
'./includes/BOTONES APARTADO ESCENARIO/ESCENARIOS/MUJERCALABAZA_CEMENTERIONOHOPE_ESCENARIOCEMENTERIO/ESCENARIO-CALABAZA.gif',
'./includes/BOTONES APARTADO ESCENARIO/ESCENARIOS/MONO_PATADELMONO_ESCENARIOESPACIAL/ESCENARIO-MONO.gif',
'./includes/BOTONES APARTADO ESCENARIO/ESCENARIOS/PIRATAESQUELETO_BAHIADELRENEGADO_ESCENARIOPIRATA/ESCENARIO-PIRATA.gif'];

function muestraImg(clicked_id){   
    //let fecha = Date();
    let parrafoNombre = document.getElementById('parrafo-Nombre');
    //let parrafoDescripcion = document.getElementById('cajaDescripcion');
    let giratorio = document.getElementById('img-cuadradaGif');
    let indiceDelBoton = botones.indexOf(clicked_id);
    let cuadradoEscenario = document.getElementById('img-cuadradaEscenario');
    //giratorio.src = "./../includes/BOTONES\ APARTADO\ ESCENARIO/MOVIMIENTO-RECTANGULO-AMARILLO.gif";
    if(cambioAmarillo == true){
      giratorio.src=movimientoAmarillo[1];
      cambioAmarillo=false;
    }else{
      giratorio.src=movimientoAmarillo[0];
      cambioAmarillo=true;
    }
    cuadradoEscenario.src = escenarios[indiceDelBoton];
    parrafoNombre.innerHTML = nombres[indiceDelBoton];
    

  }