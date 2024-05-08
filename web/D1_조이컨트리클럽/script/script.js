//nav
$("nav li").mouseover(function(){
  $(this).find(".sub").stop().slideDown();
}).mouseout(function(){
  $(this).find(".sub").stop().slideUp(1000);
})

//slide
var i=0;
function slide(){
  if(i<2){
    i++;
  }else{
    i=0;
  }
  $(".slide li").animate({top:-1*i*400},1000)
};
setInterval(slide,3000);

//tab
var t=0;
$(".tme li").click(function(){
  $(".tme li").removeClass("on");
  $(this).addClass("on");
  t=$(this).index();
  $(".tcon").hide();
  $(".tcon").eq(t).show();
  return false;
})

//pop
$(".pp").click(function(){
  $(".pop").show()
});
$(".but button").click(function(){
  $(".pop").hide()
});