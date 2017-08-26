//    $(document).on('open.zf.reveal', '[data-reveal]', function () {
//     $('#time-video').attr('src', 'https://www.youtube.com/embed/qlxrei-wmyk?autoplay=1')
//    }); 	


$(document).ready(function() {
  $('#video-btn').on('click', function(ev) {
 
    $("#time-video")[0].src += "?autoplay=1";
    ev.preventDefault();
 
  });
});

$(document).on('closed.fndtn.reveal', '[data-reveal]', function () {
  
  $("#time-video")[0].src += "?autoplay=0";
});



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