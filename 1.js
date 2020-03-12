$(function () {

    setInterval(() => {

        var slide_active =$('.active')

        if ( $('.slide:last').hasClass('active')) {
             $('.slide:first').addClass('active');
             $('.slide:last').removeClass('active');
             $('.slide:last').addClass('deactive');
             $('.slide:first').removeClass('deactive');
        }else{
            $(slide_active).removeClass('active');
            $(slide_active).next().addClass('active');
            $(slide_active).addClass('deactive');
            $(slide_active).next().removeClass('deactive');
        }



    }, 4000);
    $('.next').click(function (e) { 
        e.preventDefault();
        var slide_active =$('.active')

        if ( $('.slide:last').hasClass('active')) {
             $('.slide:first').addClass('active');
             $('.slide:last').removeClass('active');
             $('.slide:last').addClass('deactive');
             $('.slide:first').removeClass('deactive');
        }else{
            $(slide_active).removeClass('active');
            $(slide_active).next().addClass('active');
            $(slide_active).addClass('deactive');
            $(slide_active).next().removeClass('deactive');
        }
        
    });
    $('.prev').click(function (e) { 
        e.preventDefault();
        var slide_active =$('.active')

        if ( $('.slide:first').hasClass('active')) {
             $('.slide:last').addClass('active');
             $('.slide:first').removeClass('active');
             $('.slide:first').addClass('deactive');
             $('.slide:last').removeClass('deactive');
        }else{
            $(slide_active).removeClass('active');
            $(slide_active).prev().addClass('active');
            $(slide_active).addClass('deactive');
            $(slide_active).prev().removeClass('deactive');
        }     
    });
});