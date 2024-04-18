function sliderHandler() {
    if (document.querySelector('.favorites-coffee-section')) {
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
            width;

        //some variables for automatic
        //start variable for checking when a slide has automatically changed
        //timeoutId variable for further timeout clearing
        let start = Date.now();
        let timeOutId;

        //make slider change with the window resizing
        window.addEventListener('resize', ()=> {
            resize();
            currentSlide(count);
        });
        
        //slider move 
        function rollSlider() {
            sliderLine.style.transform = 'translateX(-' + count * width + 'px)';
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
                if (count < 0) {
                    count = articlesArray.length - 1;
                }
                currentSlide(count);
                rollSlider();
                clearInterval(timerId);
                timerId = setInterval(automatic, 6000);
                setInterval(timerId);
                start = Date.now();
            });
            sliderBtnNext.addEventListener('click', (event) => {
                count++;
                if (count >= articlesArray.length) {
                    count = 0;
                }
                currentSlide(count);
                rollSlider();
                clearInterval(timerId);
                timerId = setInterval(automatic, 6000);
                setInterval(timerId);
                start = Date.now();
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
        //automatically change slides with certain interval and change start variable
        function automatic(interval) {
            count++;
            if (count >= articlesArray.length) {
                count = 0;
            }
            currentSlide(count);
            rollSlider();
            start = Date.now();

            interval ?? setInterval(interval, 0);
        };

        // on mouseenter
        // clear previously set timeout (if any exists) to prevent setting new interval
        // memorize current element (count index), 
        // calculate and memorize how much time of the interrupted interval is left
        // clear previously set interval to pause scrolling

        //on mouseleave
        //set new interval equal to the time left
        //set another interval after the previous one runs once by using set timeout and default 6000ms
        function automaticWithPause() {
            let timeLeft = 0;

            slider.addEventListener('mouseenter', ()=> {
                clearTimeout(timeOutId);
                timeLeft = 6000 - (Date.now() - start);
                clearInterval(timerId);
                sliderPaginationPoints[count].classList.add('js-paused');
                console.log(sliderPaginationPoints[count]);
            });
            
            slider.addEventListener('mouseleave', ()=> {
                timerId = setInterval(automatic, timeLeft);
                timeOutId = setTimeout(()=> {
                    clearInterval(timerId);
                    timerId = setInterval(automatic, 6000);
                }, timeLeft);
                sliderPaginationPoints[count].classList.remove('js-paused');
                console.log(sliderPaginationPoints[count]);
                
            });
        }
        automaticWithPause();

        //mobile devices swiping 
        function mobileSwipe() {

            //some usefull variables
            let posX1 = 0,
                posInt = 0,
                posX2 = 0;


            function getEvent() {
                return event.type.search('touch') !== -1 ? event.touches[0] : event;
            }

            swipeArea.addEventListener('touchstart', swipeStart);
            swipeArea.addEventListener('touchmove', swipeAction);
            swipeArea.addEventListener('touchend', swipeEnd);

            //function on touchStart
            function swipeStart(event) {
                event.preventDefault();
                let evt = getEvent();
                posInt = posX1 = evt.clientX; //initial position of the cursor 
            }

            //function on touchChange
            function swipeAction(event) {
                let evt = getEvent();
                // event.preventDefault();

                posX2 = posX1 - evt.clientX; // difference between touch start point and current finger location
                posX1 = evt.clientX;
            }

            //function on touchEnd
            function swipeEnd(event) {
                // event.preventDefault();

                if(posX1 !== posInt){
                    
                    if (posX2 < 0) {
                        count--;
                        if (count < 0) {
                            count = articlesArray.length - 1;
                        }
                        currentSlide(count);
                        rollSlider();
                        clearInterval(timerId);
                        timerId = setInterval(automatic, 6000);
                        setInterval(timerId);
                    }

                    if (posX2 > 0) {
                        count++;
                        if (count >= articlesArray.length) {
                            count = 0;
                        }
                        currentSlide(count);
                        rollSlider();
                        clearInterval(timerId);
                        timerId = setInterval(automatic, 6000);
                        setInterval(timerId);
                    }
                }
                else return;
            }
        }
        mobileSwipe();
    }

}

export default sliderHandler;