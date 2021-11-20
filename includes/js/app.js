$('#img-info').click(function () {
  $(this).attr('src', '../img/botones/active/INFORMACION\ PUSH.png').addClass('active');
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
    } else {
      document.getElementById('ConSonido').style.display = 'none';
      document.getElementById('SinSonido').style.display = 'block';
    }
  }
}

// FancyBox
$(function () {
  $(".single-image").fancybox({
    openEffect: 'elastic',   //'fade', 'elastic'
    closeEffect: 'elastic',
    openSpeed: 'normal', //ms, slow, normal, fast (default 250ms)
    closeSpeed: 'normal',
  });
});

// Remove FancyBox
function myFunction() {
  var x = document.getElementsByClassName("fancybox-overlay");

  x[0].style.display = "none";
}

jQuery(document).ready(function ($) {
  $(".fancybox").on("click", function () {
    $.fancybox({
      href: this.href,
      type: $(this).data("type")
    }); // fancybox
    return false
  }); // on
}); // ready
