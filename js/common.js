$(function(){
  //script 입력영역
  $("nav ul li a,.back_to_top a, .footer_top ul li a, a.button").click(function(e){
    // console.log($(this.hash).offset().top)
    var thisElem = $(this.hash);
    $("html,body").stop();// 이전에 클릭한것을 멈춤
    $("html,body").animate({scrollTop:thisElem.offset().top},1500);

    // e.preventDefault(); //a tag return false해도 안될때
    return false;
  });
});
