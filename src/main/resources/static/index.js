
$(function(){
//animate

    $('h1').css({
       color : 'red',
       textDecoration : 'underline',
       borderBottom:'5px solid red',
       opacity : 0.5
    })
//id : typo안에 inner을 먼저선택하기
//on메서드를 생략하고 click이벤트가 바로올 수 있습니다.
   $(function(){
    $('#typo .inner').click(function(){
        //선택자.animate({속성:값, 속성:값}, 시간, 이징, 다른할일)

        $(this).animate({opacity:0,fontSize:'0px'},1500);

    });

   })
});