//메뉴
$("nav li").mouseover(function(){
  $(".sub").stop().slideDown()
})
$("nav li").mouseout(function(){
  $(".sub").stop().slideUp()
})

//슬라이드
var i=0;
function slide(){
  if (i<2){
    i++;
  }else{
    i=0;
  }
  $(".slide ul").animate({left:-1*i*1200},1000)
}
setInterval(slide,2500)

//탭메뉴
var t=0;
$(".tab li").click(function(){
  $(".tab li").removeClass("on");
  $(this).addClass("on");
  t=$(this).index();
  $(".tabc").hide();
  $(".tabc").eq(t).show();
  return false();
})

//팝업창
$(".pp").click(function(){
  $(".pop").show()
})
$(".bt button").click(function(){
  $(".pop").hide()
})