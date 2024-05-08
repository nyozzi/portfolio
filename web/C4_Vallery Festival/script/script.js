//메뉴
$("nav li").mouseover(function(){
  $(this).find(".sub").stop().slideDown(800);
}).mouseout(function(){
  $(this).find(".sub").stop().slideUp();
})

//슬라이드
var i=0;
function slide(){
  if(i<2){
    i++;
  }else{
    i=0;
  }
  $(".slide ul li").animate({left:-1*i*800},1000)
};
setInterval(slide,2500)

//팝업창
$(".pp").click(function(){
  $(".pop").show()
});
$(".but button").click(function(){
  $(".pop").hide()
});