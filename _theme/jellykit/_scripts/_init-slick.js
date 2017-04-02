 $('.slider').slick({
 	slidesToShow: 1,
 	slidesToScroll: 1,
 	arrows: true,
 	fade: false,
 	asNavFor: '.slider-nav-thumbnails',

 });

 $('.slider-nav-thumbnails').slick({
 	slidesToShow: 5,
 	slidesToScroll: 1,
 	asNavFor: '.slider',
 	dots: true,
 	//	centerMode: true,
 	focusOnSelect: true
 });


 //remove active class from all thumbnail slides
 $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');

 //set active class to first thumbnail slides
 $('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');

 // On before slide change match active thumbnail to current slide
 $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
 	var mySlideNumber = nextSlide;
 	$('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
 	$('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
});
// $('.slick-codepen').slick({
//   draggable: false,
//   accessibility: true,
//   centerMode: true,
//   variableWidth: true,
//   slidesToShow: 3,
//   speed: 800,
//   arrows: true,
//   dots: true,
//   swipeToSlide: true,
//   infinite: true,
//   autoplay: true,
//   autoplaySpeed: 3200
// });


// var prevSlideInterval = null,
//     nextSlideInterval = null;

// function prevSlideAnimation() { $('.slick-codepen').slickPrev(); };
// function nextSlideAnimation() { $('.slick-codepen').slickNext(); };

// $('.slick-prev').on('mouseenter', function() {
//   prevSlideInterval = window.setInterval(function(){ prevSlideAnimation() }, 200);
// });

// $('.slick-prev').on('mouseleave', function() {
//   window.clearInterval(prevSlideInterval);
// });

// $('.slick-next').on('mouseenter', function(){
//   nextSlideInterval = window.setInterval(function(){ nextSlideAnimation() }, 200);
// });

// $('.slick-next').on('mouseleave', function() {
//   window.clearInterval(nextSlideInterval);
// });