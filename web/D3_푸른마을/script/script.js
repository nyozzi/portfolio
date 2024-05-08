//menu
$("nav li").mouseover(function(){
  $(".sub").stop().fadeIn();
});
$("nav li").mouseout(function(){
  $(".sub").stop().fadeOut();
});

//slide
$(".slide ul li").hide()
$(".slide ul li").eq(0).show()
var i=0;
function slide(){
  if(i<2){
    i++;
  }else{
    i=0;
  }
  $(".slide ul li").fadeOut()
  $(".slide ul li").eq(i).fadeIn()
}
setInterval(slide,3000)

//tap
var t=0;
$(".tme li").click(function(){
  $(".tme li").removeClass("on")
  $(this).addClass("on");
  t=$(this).index();
  $(".tcon").hide()
  $(".tcon").eq(t).show();
  return false
});

//pop
$(".pp").click(function(){
  $(".pop").show()
});
$(".but button").click(function(){
  $(".pop").hide()
});