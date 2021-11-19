$('#img-info').click(function(){
  $(this).attr('src','../includes/botones/active/INFORMACION\ PUSH.png').addClass('active');
})

// Para manejar el Sonido:
var vid = document.getElementById("sound");

function setHalfVolume() { 
  vid.volume = 0;
}

function setFullVolume() { 
  vid.volume = 1.0;
}

function switchVisible() {
  if (document.getElementById('ConSonido')) {
    if (document.getElementById('ConSonido').style.display == 'none') {
      document.getElementById('ConSonido').style.display = 'block';
      document.getElementById('SinSonido').style.display = 'none';
    }else {
      document.getElementById('ConSonido').style.display = 'none';
      document.getElementById('SinSonido').style.display = 'block';
    }
  }
}

// FancyBox
$(function(){
  $(".single-image").fancybox({
    openEffect : 'elastic',   //'fade', 'elastic'
    closeEffect	: 'elastic',
    openSpeed:'normal', //ms, slow, normal, fast (default 250ms)
    closeSpeed:'normal',
  });
});