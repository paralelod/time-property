 //CONTENT PRELOADER

$(window).load(function() { // makes sure the whole site is loaded
        $('.preloader').fadeOut(); // will first fade out the loading animation
        $('.overlay').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({'overflow':'visible'})
});


