//menu
$("nav li").mouseover(function(){
  $(this).find(".sub").stop().fadeIn();
}).mouseout(function(){
  $(this).find(".sub").stop().fadeOut();
})

//slide
var i=0;
function slide(){
  if(i<2){
    i++;
  }else{
    i=0;
  }
  $(".slide ul").animate({left:-100*i+"%"},1000)
}
setInterval(slide,3000)

//pop
$(".pp").click(function(){
  $(".pop").show()
});
$(".but button").click(function(){
  $(".pop").hide()
});