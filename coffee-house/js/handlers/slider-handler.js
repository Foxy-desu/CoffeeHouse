function sliderHandler() {
    //slider consts
    const articlesArray = document.querySelectorAll('.slider__article'),//slides
        sliderLine = document.querySelector('.slider__articles'),//slider track
        sliderPaginationPoints = document.querySelectorAll('.pagination-fill'),
        sliderBtnNext = document.querySelector('.button-right'),//btn next
        sliderBtnPrev = document.querySelector('.button-left'),//btn prev
        swipeArea = document.querySelector('.slider__content'), //slider
        slider = document.querySelector('.slider__content-wrap');//slider-list

    //timer
    let timerId = setInterval(automatic, 6000);

    //slider variables
    let count = 0,
        slideWidth,
        width;


    //make slider change with the window resizing
    window.addEventListener('resize', resize);
    window.addEventListener('resize', currentSlide(count));

    //slider move 
    function rollSlider() {
        sliderLine.style.transform = 'translateX(-'+count * width +'px)';
    }

    //adaptive slider size -xyeta-
    function resize() {
        width = document.querySelector('.slider__content-wrap').offsetWidth;
        console.log(width);
        sliderLine.style.width = `${width * articlesArray.length}px`;
        articlesArray.forEach(elem => {
            elem.style.width = `${width}`;
            elem.style.height = `auto`;
        });
        rollSlider();
    }
    resize();

    //button-switch 
    function buttonClick() {
        sliderBtnPrev.addEventListener('click', (event) => {
            count--;
            if(count < 0) {
                count = articlesArray.length - 1;
            }
            currentSlide(count);
            rollSlider();
            clearInterval(timerId);
            timerId = setInterval(automatic, 6000);
            setInterval(timerId)
        });
        sliderBtnNext.addEventListener('click', (event) => {
            count++;
            if(count >= articlesArray.length) {
                count = 0;
            }
            currentSlide(count);
            rollSlider();
            clearInterval(timerId);
            timerId = setInterval(automatic, 6000);
            setInterval(timerId)
        });
    }
    buttonClick();

    //make pagination button colored
    function currentSlide(index) {
        // console.log(`pagination works! now index is at ${index} point`)
        sliderPaginationPoints.forEach(elem => elem.classList.remove('js-coloring'));
        sliderPaginationPoints[index].classList.add('js-coloring');
    }
    currentSlide(count);

    // nobody controls that, it's totally automatic
    function automatic() {
        count++;
        if(count >= articlesArray.length) {
            count = 0;
        }
        currentSlide(count);
        rollSlider();

        setInterval(timerId,0);
    };
    automatic();

    //mobile devices swiping 
    function mobileSwipe() {

        //some usefull variables
        let posX1 = 0,
            posInt = 0,
            posX2 = 0,
            slideIndex = 0,
            posFinal = 0,
            slideWidth = width, //one article = slider content wrap width
            posThreshold = slideWidth * .35, 
            trfRegExp = /[-0-9.]+(?=px)/;

        let slide = function() {
            rollSlider(); 
        }

        let getEvent = function() {
            return event.type.search('touch') !== -1 ? event.touches[0] : event;
        }

       
        if('ontouchstart' in window) {
            //function on touchStart
            function swipeStart() {
                let evt = getEvent();
                posInt = posX1 = evt.clientX; //initial position of the cursor
            }

            //function on touchChange
            function swipeAction() {
                let evt = getEvent(),

                posX2 = posX1 - evt.clientX;
                posX1 = evt.clientX;

                if(posX2 < 0) {
                    count--;
                    if(count < 0) {
                        count = articlesArray.length - 1;
                    }
                    currentSlide(count);
                    rollSlider();
                    clearInterval(timerId);
                    timerId = setInterval(automatic, 6000);
                    setInterval(timerId)
                }
                if(posX2 > 0) {
                    count++;
                    if(count >= articlesArray.length) {
                        count = 0;
                    }
                    currentSlide(count);
                    rollSlider();
                    clearInterval(timerId);
                    timerId = setInterval(automatic, 6000);
                    setInterval(timerId)
                }
                
            }

            //function on touchEnd
            function swipeEnd() {

            }

            //add event listeners
            swipeArea.addEventListener('touchmove', swipeAction);
            swipeArea.addEventListener('touchend', swipeEnd);
            swipeArea.addEventListener('mousemove', swipeAction);
            swipeArea.addEventListener('mouseup', swipeEnd);
            
        }
    }
    mobileSwipe();


    


}

export default sliderHandler;