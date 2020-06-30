$(function(){
    var $duration =300;
    var $image = $('#images p');

    //첫번째 캡션,span animate()
    //두번쨰 p태그 선택 $image.filter(':nth-child(2)')
     $image.filter(':nth-child(1)').mouseover(function(){

        $(this).find('span, strong').stop().animate({opacity:1},$duration);

    })
    .mouseout(function(){

        $(this).find('span,strong').stop().animate({opacity:0},$duration);

    });


    $image.filter(':nth-child(2)').mouseover(function(){

         $(this).find('span').stop().animate({opacity:1},$duration);
         $(this).find('strong').stop().animate({opacity:1, left :'0%'},$duration);
    })
    .mouseout(function(){

         $(this).find('span').stop().animate({opacity:0},$duration);
         $(this).find('strong').stop().animate({opacity:0, left :'-200%'},$duration);
    });

     $image.filter(':nth-child(3)').mouseover(function(){

             $(this).find('span').stop().animate({opacity:1},$duration);
             $(this).find('strong').stop().animate({opacity:1, bottom :0},$duration);
             $(this).find('img').stop().animate({top :'-40px'},$duration);
        })
        .mouseout(function(){

             $(this).find('span').stop().animate({opacity:1},$duration);
             $(this).find('strong').stop().animate({opacity:1, bottom :'-80px'},$duration);
             $(this).find('img').stop().animate({top :'0px'},$duration);
        });

});