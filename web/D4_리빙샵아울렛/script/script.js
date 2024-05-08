//menu
$("nav li").mouseover(function(){
  $(".sub").stop().fadeIn();
}).mouseout(function(){
  $(".sub").stop().fadeOut("slow");
})

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

//pop
$(".pp").click(function(){
  $(".pop").show()
});
$(".but button").click(function(){
  $(".pop").hide()
});