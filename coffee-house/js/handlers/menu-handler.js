import store from "../products/products";

function menuHandler() {
    //check if the right page is displayed
    if(document.querySelector('.menu-section')) {

        //lists of menu items
        const coffeeList = store.menuPage.coffee;
        const teaList = store.menuPage.tea;
        const dessertList = store.menuPage.dessert;

        //controls
        const categoryBtnsBlock = document.querySelector('.menu-section__buttons');
        const categoryBtns = document.querySelectorAll('.menu-section__button');
        const defaultBtn = categoryBtnsBlock.firstElementChild; //shown as active on  page load

        //variables;
        let currentCategory = coffeeList;
        let currentBtn = defaultBtn;

        //show the right category of products
        function showItems() {
           
            function currentCategoryChange() {
                //click changes current category
                categoryBtnsBlock.addEventListener('click', (event)=> {
                    let target = event.target.dataset.btnType;

                    switch(target) {
                        case 'coffee-btn': {
                            currentCategory = coffeeList;
                            console.log(currentCategory);//for debug
                            break
                        };
                        case 'tea-btn': {
                            currentCategory = teaList;
                            console.log(currentCategory);//for debug
                            break
                        };
                        case 'dessert-btn': {
                            currentCategory = dessertList;//for debug
                            console.log(currentCategory);
                            break
                        };
                        default: {
                            break
                        };
                    };
                    console.log(target);
                },)
            
            }
            currentCategoryChange();

            function currentBtnChange() {
                //click changes current button
                categoryBtnsBlock.addEventListener('click', (event)=> {
                    let element = event.target;
                    
                    if(element.dataset.btnType) {
                        currentBtn = element.closest('button');

                    }
                    colorizeCurrentBtn();
                })
            }
            currentBtnChange();

            function colorizeCurrentBtn() {
                categoryBtns.forEach((button) => {
                    button.classList.remove('menu-section__button--active');
                    button.removeAttribute('disabled');
                    if(button === currentBtn) {
                        button.classList.add('menu-section__button--active');
                        button.setAttribute('disabled', '');
                    }
                })
            };
        }
        showItems();

    }
};

export default menuHandler;