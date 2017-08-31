//foundation init
  $(document).foundation();
  console.log('INIT - foundation5');

  
  // $(document).foundation('abide','events');

//   document.addEventListener("DOMContentLoaded", function() {
//     var elements = document.getElementsByTagName("INPUT");
//     for (var i = 0; i < elements.length; i++) {
//         elements[i].oninvalid = function(e) {
//             e.target.setCustomValidity("");
//             if (!e.target.validity.valid) {
//                 e.target.setCustomValidity("This field cannot be left blank");
//             }
//         };
//         elements[i].oninput = function(e) {
//             e.target.setCustomValidity("");
//         };
//     }
// })

  // $(document).foundation({
  //   accordion: {
  //     // specify the class used for active (or open) accordion panels
  //     active_class: 'active',
  //     // allow multiple accordion panels to be active at the same time
  //     multi_expand: true,
  //   }
  // });

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


  