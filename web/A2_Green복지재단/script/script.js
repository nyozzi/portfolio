//메뉴
$("nav li").mouseover(function(){
  $(".sub, .sub2").stop().slideDown();
});
$("nav li").mouseleave(function(){
  $(".sub, .sub2").stop().slideUp();
});

//슬라이드
var i=0;
function slide(){
  if(i<2){
    i++;
  }else{
    i=0;
  }
  $(".slide ul").animate({left:-1*i*1200},1000)
}
setInterval(slide,2000)

//팝업창
$(".pp").click(function(){
  $(".pop").show();
});
$(".button button").click(function(){
  $(".pop").hide();
});