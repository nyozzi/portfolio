//메뉴
$("nav>ul").mouseover(function(){
  $(".sub, .sub2").stop().slideDown();
});
$("nav>ul").mouseout(function(){
  $(".sub, .sub2").stop().slideUp();
});

//슬라이드
$(".slide ul li").hide();
$(".slide ul li").eq(0).show();
var i=0;
function slide(){
  if(i<2){
    i++;
  }else{
    i=0;
  }
  $(".slide ul li").fadeOut();
  $(".slide ul li").eq(i).fadeIn();
}
setInterval(slide,2500)

//팝업창
$(".pp").click(function(){
  $(".pop").show();
});
$(".bt button").click(function(){
  $(".pop").hide();
});