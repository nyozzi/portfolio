//menu
$("nav li").mouseover(function(){
  $(this).find(".sub").stop().slideDown();
}).mouseout(function(){
  $(this).find(".sub").stop().slideUp();
})

//slide
$(".slide li").hide()
$(".slide li").eq(0).show()
var i=0;
function slide(){
  if(i<2){
    i++;
  }else{
    i=0;
  }
  $(".slide li").fadeOut()
  $(".slide li").eq(i).fadeIn()
}
setInterval(slide,3000)

//tabmenu
var t=0;
$(".tmen>li").click(function(){
  $(".tmen>li").removeClass("on")
  $(this).addClass("on")
  t=$(this).index()
  $(".tcon").hide()
  $(".tcon").eq(t).show()
  return false
});

//pop
$(".pp").click(function(){
  $(".pop").show();
})
$(".but button").click(function(){
  $(".pop").hide();
})