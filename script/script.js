var slides = document.querySelector('.slides'),
    slide =document.querySelectorAll('.slides li'),
    currentIdx = 0,
    slideCount = slide.length,
    prevBtn = document.querySelector('.prev'),
    slideWidth = 300,
    slideMargin = 30,
    nextBtn = document.querySelector('.next');

    slides.style.width =(slideWidth + slideMargin)*slideCount - slideMargin + 'px';

    function moveSlide(num){
        slides.style.left = -num * 330 + 'px';
        currentIdx = num;
    }
    nextBtn.addEventListener('click', function(){
        if(currentIdx < slideCount - 3){
            moveSlide(currentIdx + 1);
        }else{
            moveSlide(0);
        }
    });

    prevBtn.addEventListener('click', function(){
        if(currentIdx > 0){
            moveSlide(currentIdx - 1);
        }else{
            moveSlide(slideCount - 3);
        }
    });


var slides2 = document.querySelector('.slides2'),
    slide2 =document.querySelectorAll('.slides2 li'),
    currentIdx2 = 0,
    slide2Count = slide2.length,
    prev2Btn = document.querySelector('.prev2'),
    slide2Width = 300,
    slide2Margin = 30,
    next2Btn = document.querySelector('.next2');

    slides2.style.width =(slide2Width + slide2Margin)*slide2Count - slide2Margin + 'px';

    function moveSlide2(num){
        slides2.style.left = -num * 330 + 'px';
        currentIdx2 = num;
    }
    next2Btn.addEventListener('click', function(){
        if(currentIdx2 < slide2Count - 3){
            moveSlide2(currentIdx2 + 1);
        }else{
            moveSlide2(0);
        }
    });

    prev2Btn.addEventListener('click', function(){
        if(currentIdx2 > 0){
            moveSlide2(currentIdx2 - 1);
        }else{
            moveSlide2(slide2Count - 3);
        }
    });


var slides3 = document.querySelector('.slides3'),
    slide3 =document.querySelectorAll('.slides3 li'),
    currentIdx3 = 0,
    slide3Count = slide3.length,
    prev3Btn = document.querySelector('.prev3'),
    slide3Width = 300,
    slide3Margin = 30,
    next3Btn = document.querySelector('.next3');

    slides3.style.width =(slide3Width + slide3Margin)*slide3Count - slide3Margin + 'px';

    function moveSlide3(num){
        slides3.style.left = -num * 495 + 'px';
        currentIdx3 = num;
    }
    next3Btn.addEventListener('click', function(){
        if(currentIdx3 < slide3Count - 10){
            moveSlide3(currentIdx3 + 1);
        }else{
            moveSlide3(0);
        }
    });

    prev3Btn.addEventListener('click', function(){
        if(currentIdx3 > 0){
            moveSlide3(currentIdx3 - 1);
        }else{
            moveSlide3(slide3Count - 10);
        }
    });