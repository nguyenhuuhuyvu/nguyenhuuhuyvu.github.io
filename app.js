$(function () {
    $('.gicungduoc').click(function (e) { 
        e.preventDefault();
        $('.gicungduoc').removeClass('active');
        $(this).addClass('active'); 

    });

    $('.m1').click(function (e) { 
        e.preventDefault();

        $('html').animate({
            scrollTop: 0
        }, 1000);

    });

    $('.m2').click(function (e) { 
        e.preventDefault();

        $('html').animate({
            scrollTop: $('.khoi2').offset().top
        }, 1000);

    });

    $('.m3').click(function (e) { 
        e.preventDefault();

        $('html').animate({
            scrollTop: $('.khoi3').offset().top
        }, 1000);

    });

    $('.m4').click(function (e) { 
        e.preventDefault();

        $('html').animate({
            scrollTop: $('.khoi4').offset().top
        }, 1000);

    });
 
    $('.m5').click(function (e) { 
        e.preventDefault();

        $('html').animate({
            scrollTop: $('.khoi5').offset().top
        }, 1000);

    });
    
    $('.m6').click(function (e) { 
        e.preventDefault();

        $('html').animate({
            scrollTop: $('.khoi6').offset().top
        }, 1000);

    });


    $('.mauxanh').click(function (e) { 
        e.preventDefault();
        $('body').addClass('xanh');
        $('body').removeClass('vang');
    });

    $('.mauvang').click(function (e) { 
        e.preventDefault();
        $('body').addClass('vang');
        $('body').removeClass('xanh');
    });

    $('.maucam').click(function (e) { 
        e.preventDefault();
        $('body').removeClass('xanh');
        $('body').removeClass('vang');
    });
    $(window).scroll(function(){
        console.log(window.pageYOffset);

        if (window.pageYOffset >= $('.khoi6').offset().top) {
            $('.gicungduoc').removeClass('active');
            $('.m6').addClass('active');
            
        }else if (window.pageYOffset >= $('.khoi5').offset().top) {
            $('.gicungduoc').removeClass('active');
            $('.m5').addClass('active');
        }else if (window.pageYOffset >= $('.khoi4').offset().top) {
            $('.gicungduoc').removeClass('active');
            $('.m4').addClass('active');
        }else if (window.pageYOffset >= $('.khoi3').offset().top) {
            $('.gicungduoc').removeClass('active');
            $('.m3').addClass('active');
        }else if (window.pageYOffset >= $('.khoi2').offset().top) {
            $('.gicungduoc').removeClass('active');
            $('.m2').addClass('active');
        }else{
            $('.gicungduoc').removeClass('active');
            $('.m1').addClass('active');
            
            
        }

    
        
    



          
    });


    console.log($('.khoi2').offset().top);
    console.log($('.khoi3').offset().top);
    console.log($('.khoi4').offset().top);
    console.log($('.khoi5').offset().top);
    console.log($('.khoi6').offset().top);



});