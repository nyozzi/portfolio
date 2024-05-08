//메뉴
$("nav li").mouseenter(function(){
    $(".sub").stop().slideDown()
})
$("nav li").mouseleave(function(){
    $(".sub").stop().slideUp()
})

//슬라이드
var i=0;
function slide(){
    if(i<2){
        i++;
    }else{
        i=0;
    }
    $(".slide ul").animate({top:-1*i*300},1000)
}
setInterval(slide,2000)

//탭메뉴
var tab=0;
$(".tab li").click(function(){
    $(".tab li").removeClass("on");
    $(this).addClass("on");
    tab=$(this).index();
    $(".tc").hide();
    $(".tc").eq(tab).show();
    return false();
})

//팝업
$(".pp").click(function(){
    $(".pop").show();
});
$(".button button").click(function(){
    $(".pop").hide();
});