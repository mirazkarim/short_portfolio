$(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('.nav').addClass('black');
        $('nav_bar').addId('black');
    }
    else{
        $('.nav').removeClass('black');
        $('nav_bar').removeId('black');
    }
})
/*menu button onclick function*/         $(document).ready(function(){
        $('.menu h4').click(function(){
            $(".nav ul").toggleClass("active")
    })
    })
    // nav end 

    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:false,
        nextArrow:false,
        dots:false,
        autoplay:true,
        centerMode:true,
        centerPadding:'0',
        autoplaySpeed:1000,
      });
    // hero end


    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    // count end
    

    $('.myslider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:false,
        nextArrow:false,
        dots:false,
        autoplay:true,
        centerMode:true,
        centerPadding:'0',
        autoplaySpeed:1000,
      });
  // shot end  