$(function () {
    setInterval(() => {
        var slide_active = $('.active');
        console.log(slide_active);

        if ($('.slide4').hasClass('active')){
            $('.slide4').removeClass('active');
            $('.slide1').addClass('active');
       } else{
           $('.active').removeClass('active');
           $(slide_active).next().addClass('active');
       }    
    

    },5000);
    $('.next').click(function (e) { 
        e.preventDefault();
        var slide_active = $('.active');
        console.log(slide_active);

        if ($('.slide4').hasClass('active')){
            $('.slide4').removeClass('active');
            $('.slide1').addClass('active');
       } else{
           $('.active').removeClass('active');
           $(slide_active).next().addClass('active');
       }    
    });
    $('.prev').click(function (e) { 
        e.preventDefault();
        var slide_active = $('.active');
        console.log(slide_active);

        if ($('.slide1').hasClass('active')){
            $('.slide1').removeClass('active');
            $('.slide4').addClass('active');
       } else{
           $('.active').removeClass('active');
           $(slide_active).prev().addClass('active');
       }    
    });
    
    
});








