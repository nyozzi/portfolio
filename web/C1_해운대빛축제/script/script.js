//메뉴
$("nav li").mouseover(function(){
  $(this).find(".sub").stop().slideDown();
}).mouseout(function(){
  $(this).find(".sub").stop().slideUp(800);
});

//슬라이드
$(".slide ul li").hide()
$(".slide ul li").eq(0).show();
var i=0;
function slide(){
  if (i<2){
    i++;
  }else{
    i=0;
  }
  $(".slide ul li").fadeOut()
  $(".slide ul li").eq(i).fadeIn();
};
setInterval(slide,3000)

//탭메뉴
var t=0;
$(".tabm li").click(function(){
  $(".tabm li").removeClass("on")
  $(this).addClass("on");
  t=$(this).index()
  $(".tabc").hide()
  $(".tabc").eq(t).show();
  return false()
});

//팝업창
$(".pp").click(function(){
  $(".pop").show()
});
$(".but button").click(function(){
  $(".pop").hide()
});