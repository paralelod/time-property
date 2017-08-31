 
 /*

 */


 
 
 $('.slider-plantas').slick({
 	autoplay:true,
    autoplaySpeed:5000,
    speed:900,
    slidesToShow:1,
    slidesToScroll:1,
    pauseOnHover:false,
    dots:true,
    // pauseOnDotsHover:true,
    // cssEase:'linear',
    fade:true,
    draggable:true,
	// centerMode: true,
	// dots: true,
 	// asNavFor: '.slider-plantas-thumbs',
	// prevArrow: '<img src="./assets/img/button-r.png" class="slick-prev v-center">',
    // nextArrow: '<img src="./assets/img/button-l.png" class="slick-next v-center">',
    prevArrow: '<img src="http://www.timepropertyclub.com/assets/img/button-r.png" class="slick-prev v-center">',
    nextArrow: '<img src="http://www.timepropertyclub.com/assets/img/button-l.png" class="slick-next v-center">',  

 });

//  $('.slider-plantas-thumbs').slick({
//  	slidesToShow: 5,
//  	slidesToScroll: 1,
//  	asNavFor: '.slider-plantas',
//  	// dots: true,
//  	//	centerMode: true,
//  	focusOnSelect: true
//  });


 //remove active class from all thumbnail slides
//  $('.slider-plantas-thumbs').removeClass('slick-active');

 //set active class to first thumbnail slides
 $('.slider-plantas-thumbs').eq(0).addClass('slick-active');

 // On before slide change match active thumbnail to current slide
 $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
 	var mySlideNumber = nextSlide;
 	$('.slider-plantas-thumbs').removeClass('slick-active');
 	$('.slider-plantas-thumbs').eq(mySlideNumber).addClass('slick-active');
});


 $('.slider-frases').slick({
 	// slidesToShow: 1,
 	// slidesToScroll: 1,
	// autoPlay: true,
	// autoplaySpeed:1000,
    // speed:900, 
 	// arrows: true,
 	// fade: false,
	autoplay:true,
    autoplaySpeed:7000,
    speed:900,
    slidesToShow:1,
    slidesToScroll:1,
    pauseOnHover:false,
    dots:true,
    pauseOnDotsHover:true,
    cssEase:'linear',
    fade:true,
    draggable:false,
    prevArrow: '<img src="./assets/img/button-r.png" class="slick-prev">',
    nextArrow: '<img src="./assets/img/button-l.png" class="slick-next">',
	 
	// centerMode: true,
	// dots: true,
 	// asNavFor: '.slider-plantas-thumbs',
	// prevArrow: '<div class="slick-prev"><i class="i-chev-left-thin"></i><span class="sr-text">Previous</span></div>',
  	// nextArrow: '<div class="slick-next"><i class="i-chev-right-thin"></i><span class="sr-text">Next</span></div>'

 });