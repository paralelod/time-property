//    $(document).on('open.zf.reveal', '[data-reveal]', function () {
//     $('#time-video').attr('src', 'https://www.youtube.com/embed/qlxrei-wmyk?autoplay=1')
//    }); 	



// $(document).ready(function() {
//   $('#video-btn').on('click', function(ev) {
 
//     $("#time-video")[0].src += "?autoplay=1";
//     ev.preventDefault();
 
//   });
// });

// $(document).on('closed.fndtn.reveal', '[data-reveal]', function () {
  
//   $("#time-video")[0].src += "?autoplay=0";
// });



// jQuery(".#time-video .triggerClose  ").live("click", function() {
//     jQuery("#myModal iframe").attr("src", jQuery("#myModal iframe").attr("src"));
// });

// // Kills video on close button
// $('#time-video .triggerClose').click(function() {
//     $('#time-video').stopVideo();
//     $('#time-video').attr('src', 'https://www.youtube.com/embed/qlxrei-wmyk')
// });


// // Kills video on overlay div
// $('.reveal-overlay').click(function() {
//     $('#time-video').stopVideo();
//     $('#time-video').attr('src', 'https://www.youtube.com/embed/qlxrei-wmyk')
  
// });







$( document ).ready(function() {
  
  $('#play-video').on('click', function(event) {
 
    $( "#video-trigger" ).addClass("removed");

    $("#video").addClass("watch");
    $("#video")[0].src += "&autoplay=1";  
    
    event.preventDefault();
 
  });

});

function loadIframe(iframeName, url) {
  var $iframe = $('#' + iframeName);
  if ( $iframe.length ) {
      $iframe.attr('src',url);   
      return false;
  }
  return true;
}

$(window).scroll(function() {
  console.log($(window).scrollTop());
  if ($(window).scrollTop() > 500) {
    if ($(window).width() > 1024) {
      $( "#video-trigger" ).removeClass("removed");
      loadIframe('video', 'https://www.youtube.com/embed/qlxrei-wmyk?rel=0&amp;controls=0&amp;showinfo=0&enablejsapi=1')
    }
  }
});


if ($(window).width() < 1024) {
  $( "#video-trigger" ).addClass("removed");
  $("#video").addClass("watch");
}


$(window).on("resize", function(event){
  if ($(window).width() < 1024) {
    $( "#video-trigger" ).addClass("removed");
    $("#video").addClass("watch");
  }
  else {
    $( "#video-trigger" ).removeClass("removed");
    $("#video").removeClass("watch");
  }
});