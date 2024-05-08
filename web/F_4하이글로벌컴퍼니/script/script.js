//menu
$("nav li").mouseover(function(){
  $(".sub, .sub2").stop().slideDown(500);
})
$("nav li").mouseleave(function(){
  $(".sub, .sub2").stop().slideUp(500);
})

//slide
var i=0;
function slide(){
  if (i<2){
    i++;
  }else{
    i=0;
  }
  $(".slide li").animate({top:-1*i*350},1000)
}
setInterval(slide,3000)

//pop
$(".pp").click(function(){
  $(".pop").show()
});
$(".but button").click(function(){
  $(".pop").hide()
});