//foundation init
  $(document).foundation();

  //foundation init JOYRIDE *crash ORBIT slider
  //$(document).foundation('joyride', 'start');

/* acessar link accordion Foundation --->  

setTimeout(function() {

  var hash = window.location.hash;
  if (hash != ''){

    $('a[href="'+ hash +'"]').trigger('click.fndtn.accordion');

    $('html, body').animate({
      scrollTop: $('dl.accordion').offset().top
    });
  }
}, 600);*/
/*$(document).foundation('section').foundation('orbit', {
    animation: 'fade',
    timer_speed: 3000,
    animation_speed: 400,
    stack_on_small: false,
    navigation_arrows: false,
    slide_number: false,
    pause_on_hover: false,
    resume_on_mouseout: false,
    bullets: false,
    timer: true,
    variable_height: false,
  });*/

  console.log('INIT - foundation5');