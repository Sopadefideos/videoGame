let botones =['btn-pj-1', 'btn-pj-2', 'btn-pj-3', 'btn-pj-4', 'btn-pj-5', 'btn-pj-6', 'btn-pj-7', 'btn-pj-8' , 'btn-pj-9', 'btn-pj-10'];
  console.log(botones.indexOf('btn-pj-1'));
  let imagenDinamica = document.getElementById('fotoPJjs');
  //Array con las fotos de los PJ
  let claseImagenDinamica = document.getElementsByClassName('fotoPJjs');
  //Array con las imagenes de las habilidades
  let habilidadesPjs = document.getElementsByClassName('img-Habilidades');
  console.log(habilidadesPjs[2]);
  console.log(habilidadesPjs[3]);
  console.log(habilidadesPjs[4]);

  let botonesPj= document.getElementsByClassName('btnPJ');
  console.log(imagenDinamica);

  function muestraImg(clicked_id){  
    let indiceDelBoton = botones.indexOf(clicked_id);
    console.log(indiceDelBoton);           
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
    console.log(habilidadesPjs);
  }