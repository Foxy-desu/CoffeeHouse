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
        const loadMoreBtn = document.querySelector('.menu-section__refresh');

        //menu elements
        const menu = document.querySelector('.menu-section__articles');
        // const menuCards = document.querySelectorAll('.menu-section__article');

        //variables;
        let currentCategory = coffeeList;
        let currentBtn = defaultBtn;

        //on page load current category should be displayed;

        //show the right category of products
        function showItems() {
            //card template will work in a cycle with current category elems
            // const card = `
            // <!--article start-->
            // <article class="menu-section__article">
            //     <div class="menu-section__item-image-wrap">
            //         <img class="menu-section__item-image menu-section__image1" src="${elem.thumbnail || ''}" alt="a photo of ${elem.name || ''}">
            //     </div>
            //     <div class="menu-section__item-info-wrap">
            //         <h3 class="menu-section__item-heading">
            //             ${elem.name || ''}
            //         </h3>
            //         <p class="menu-section__item-description">
            //             ${elem.description || ''}
            //         </p>
            //         <p class="menu-section__item-price">
            //             $${elem.price || ''}
            //         </p>
            //     </div>
            // </article>
            // <!--article end-->
            // `;
            const menuCards = Array.from(menu.childNodes);
           
            function currentCategoryChange() {
                //click changes current category
                categoryBtnsBlock.addEventListener('click', (event)=> {
                    let target = event.target.dataset.btnType;

                    switch(target) {
                        case 'coffee-btn': {
                            currentCategory = coffeeList;
                            break
                        };
                        case 'tea-btn': {
                            currentCategory = teaList;
                            break
                        };
                        case 'dessert-btn': {
                            currentCategory = dessertList;
                            break
                        };
                        default: {
                            break
                        };
                    };
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
                    showItems();
                    hideMoreItems();
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

            if(menuCards.length !== 0){
                menuCards.forEach((elem)=> {
                elem.remove();
            })
            };

            currentCategory.map((elem) => {
                menu.insertAdjacentHTML('beforeend',
                `
                <!--article start-->
                <article class="menu-section__article">
                    <div class="menu-section__item-image-wrap">
                        <img class="menu-section__item-image menu-section__image1" src="${elem.thumbnail || ''}" alt="a photo of ${elem.name || ''}">
                    </div>
                    <div class="menu-section__item-info-wrap">
                        <h3 class="menu-section__item-heading">
                            ${elem.name || ''}
                        </h3>
                        <p class="menu-section__item-description">
                            ${elem.description || ''}
                        </p>
                        <p class="menu-section__item-price">
                            $${elem.price || ''}
                        </p>
                    </div>
                </article>
                <!--article end-->
                `
                );
            });

            function hideLoadMoreBtn(){
                categoryBtnsBlock.addEventListener('click', ()=> {
                    console.log(currentCategory);
                    if(currentCategory.length <= 4) {

                        loadMoreBtn.style.display = 'none';
                    }
                    else {
                        loadMoreBtn.style.display = 'inline-block';
                    }
                })
            }
            hideLoadMoreBtn();
        }
        showItems();

        function showMoreItems() {
            loadMoreBtn.addEventListener('click', (event)=> {
                menu.classList.add('js-expose-hidden-cards');
                loadMoreBtn.classList.add('js-hide');
            })
        }
        showMoreItems();

        function hideMoreItems() {
            menu.classList.remove('js-expose-hidden-cards');
            loadMoreBtn.classList.remove('js-hide'); 
        };

        function hideMoreItemsOnResize() {
            window.addEventListener('resize', hideMoreItems)
        }
        hideMoreItemsOnResize();

    }
};


export default menuHandler;