function sliderHandler() {
    //slider consts
    const slider = document.querySelector('.slider__content-wrap'),
        articlesArray = document.querySelectorAll('.slider__article'),
        sliderLine = document.querySelector('.slider__articles'),
        sliderPaginationPoints = document.querySelectorAll('.slider__pagination-button'),
        sliderBtnNext = document.querySelector('.button-right'),
        sliderBtnPrev = document.querySelector('.button-left');

    //slider variables
    let sliderCount = 0,
        width,
        itemWidth,
        offset = 0;


    //make slider change with the window resizing
  



    //adaptive slider size 
    function sliderAdaptize() {
       width = slider.offsetWidth;
       itemWidth = width;

       articlesArray.forEach(item => {
        item.style.width = `${itemWidth}px`;
        item.style.height = 'auto';
       })

       sliderLine.style.width = `${itemWidth * articlesArray.length}px`;

    };
    sliderAdaptize();
    window.addEventListener('resize', sliderAdaptize);

}

export default sliderHandler;