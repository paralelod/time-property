$(function(){
    var windowH = $(window).height();
    var wrapperH = $('.full-height').height();
    if(windowH > wrapperH) {                            
        $('.full-height').css({'height':($(window).height())+'px'});
    }                                                                               
    $(window).resize(function(){
        var windowH = $(window).height();
        var wrapperH = $('.full-height').height();
        var differenceH = windowH - wrapperH;
        var newH = wrapperH + differenceH;
        var truecontentH = $('#truecontent').height();
        if(windowH > truecontentH) {
            $('.full-height').css('height', (newH)+'px');
        }

    })          
});