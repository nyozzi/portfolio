//menu
$("nav li").mouseover(function(){
    $(".sub, .sub2").stop().slideDown(700)
});
$("nav li").mouseout(function(){
    $(".sub, .sub2").stop().slideUp(700)
});

//slide
var i=0;
function slide(){
    if (i<2){
        i++;
    }else{
        i=0;
    }
    $(".slide ul").animate({left:-100*i+"%"},1500)
}
setInterval(slide,3000)

//tab
var t=0;
$(".tme>li").click(function(){
    $(".tme>li").removeClass("on")
    $(this).addClass("on")
    t=$(this).index()
    $(".tcon").hide()
    $(".tcon").eq(t).show()
    return false
})

//pop
$(".pp").click(function(){
    $(".pop").show()
});
$(".but button").click(function(){
    $(".pop").hide()
});