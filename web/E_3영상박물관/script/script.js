//menu
$("nav li").mouseover(function(){
  $(this).find(".sub").stop().slideDown();
}).mouseout(function(){
  $(this).find(".sub").stop().slideUp();
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

//menu
$(".pp").click(function(){
  $(".pop").show()
});
$(".but button").click(function(){
  $(".pop").hide()
});