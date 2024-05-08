//menu
$("nav li").mouseover(function(){
  $(this).find(".sub").stop().slideDown(500);
}).mouseout(function(){
  $(this).find(".sub").stop().slideUp(1200);
})

//slide
var i=0;
function slide(){
  if(i<2){
    i++;
  }else{
    i=0;
  }
  $(".slide ul").animate({top:-1*i*800},1000)
}
setInterval(slide,3000)

//pop
$(".pp").click(function(){
  $(".pop").show()
});
$(".but button").click(function(){
  $(".pop").hide()
});