
$(function(){


    $('h1').css({
       color : 'red',
       textDecoration : 'underline',
       borderBottom:'5px solid red',
       transform :'rotate(45deg)',
       opacity : 0.5
    })

    $('h1').mouseover(function(){

        $(this).css({color : 'blue'});

    })
    .mouseout(function(){

            $(this).css({color : 'red'});
        });
});