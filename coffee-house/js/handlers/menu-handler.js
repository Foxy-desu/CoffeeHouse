import store from "../products/products";

function menuHandler() {
    //check if the right page is displayed
    if(document.querySelector('.menu-section')) {

        //lists of menu items
        const coffeeList = store.menuPage.coffee;
        const teaList = store.menuPage.tea;
        const dessertList = store.menuPage.dessert;

        //menu controls
        const categoryBtnsBlock = document.querySelector('.menu-section__buttons');
        const categoryBtns = document.querySelectorAll('.menu-section__button');
        const defaultBtn = categoryBtnsBlock.firstElementChild; //shown as active on  page load
        const loadMoreBtn = document.querySelector('.menu-section__refresh');

        //menu elements
        const menu = document.querySelector('.menu-section__articles');

        //popUp

        //variables;
        let currentCategory = coffeeList;
        let currentBtn = defaultBtn;
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // //show the right category of products
        // function showItems() {
        //     //card template will work in a cycle with current category elems
        //     // const card = `
        //     // <!--article start-->
        //     // <article class="menu-section__article">
        //     //     <div class="menu-section__item-image-wrap">
        //     //         <img class="menu-section__item-image menu-section__image1" src="${elem.thumbnail || ''}" alt="a photo of ${elem.name || ''}">
        //     //     </div>
        //     //     <div class="menu-section__item-info-wrap">
        //     //         <h3 class="menu-section__item-heading">
        //     //             ${elem.name || ''}
        //     //         </h3>
        //     //         <p class="menu-section__item-description">
        //     //             ${elem.description || ''}
        //     //         </p>
        //     //         <p class="menu-section__item-price">
        //     //             $${elem.price || ''}
        //     //         </p>
        //     //     </div>
        //     // </article>
        //     // <!--article end-->
        //     // `;
        //     const menuCards = Array.from(menu.childNodes);
           
        //     function currentCategoryChange() {
        //         //click changes current category
        //         categoryBtnsBlock.addEventListener('click', function changeCategory(event) {
        //             let target = event.target.dataset.btnType;

        //             switch(target) {
        //                 case 'coffee-btn': {
        //                     currentCategory = coffeeList;
        //                     break
        //                 };
        //                 case 'tea-btn': {
        //                     currentCategory = teaList;
        //                     break
        //                 };
        //                 case 'dessert-btn': {
        //                     currentCategory = dessertList;
        //                     break
        //                 };
        //                 default: {
        //                     break
        //                 };
        //             };
        //         },)
            
        //     }
        //     currentCategoryChange();

        //     function currentBtnChange() {
        //         //click changes current button
        //         categoryBtnsBlock.addEventListener('click', function newCurrent(event) {
        //             let element = event.target;
                    
        //             if(element.dataset.btnType) {
        //                 currentBtn = element.closest('button');

        //             }
        //             colorizeCurrentBtn();
        //             showItems();
        //             hideMoreItems();
        //         })
        //     }
        //     currentBtnChange();

        //     function colorizeCurrentBtn() {
        //         categoryBtns.forEach((button) => {
        //             button.classList.remove('menu-section__button--active');
        //             button.removeAttribute('disabled');
        //             if(button === currentBtn) {
        //                 button.classList.add('menu-section__button--active');
        //                 button.setAttribute('disabled', '');
        //             }
        //         })
        //     };

        //     if(menuCards.length !== 0){
        //         menuCards.forEach((elem)=> {
        //         elem.remove();
        //     })
        //     };

        //     currentCategory.map((elem) => {
        //         menu.insertAdjacentHTML('beforeend',
        //         `
        //         <!--article start-->
        //         <article class="menu-section__article">
        //             <div class="menu-section__item-image-wrap">
        //                 <img class="menu-section__item-image menu-section__image1" src="${elem.thumbnail || ''}" alt="a photo of ${elem.name || ''}">
        //             </div>
        //             <div class="menu-section__item-info-wrap">
        //                 <h3 class="menu-section__item-heading">
        //                     ${elem.name || ''}
        //                 </h3>
        //                 <p class="menu-section__item-description">
        //                     ${elem.description || ''}
        //                 </p>
        //                 <p class="menu-section__item-price">
        //                     $${elem.price || ''}
        //                 </p>
        //             </div>
        //         </article>
        //         <!--article end-->
        //         `
        //         );
        //     });

        //     function hideLoadMoreBtn(){
        //         categoryBtnsBlock.addEventListener('click', function manageLoadBtn() {
        //             console.log(currentCategory);
        //             if(currentCategory.length <= 4 || window.innerWidth > 768) {

        //                 loadMoreBtn.style.display = 'none';
        //             }
        //             else {
        //                 loadMoreBtn.style.display = 'inline-block';
        //             }
        //         })

        //         window.addEventListener('resize', ()=> {
        //             if (window.innerWidth > 768 || currentCategory.length <= 4) {
        //                 loadMoreBtn.style.display = 'none';
        //             }
        //             else {
        //                 loadMoreBtn.style.display = 'inline-block';
        //             }
                    
        //         })
        //     }
        //     hideLoadMoreBtn();
        // }
        // showItems();

        // //handle load more button to show more
        // function showMoreItems() {
        //     loadMoreBtn.addEventListener('click', (event)=> {
        //         menu.classList.add('js-expose-hidden-cards');
        //         loadMoreBtn.classList.add('js-hide');
        //     })
        // }
        // showMoreItems();

        //  //handle load more button to hide more
        // function hideMoreItems() {
        //     menu.classList.remove('js-expose-hidden-cards');
        //     loadMoreBtn.classList.remove('js-hide'); 
        // };

        //  //handle hide more on resize
        // function hideMoreItemsOnResize() {
        //     window.addEventListener('resize', hideMoreItems)
        // }
        // hideMoreItemsOnResize();

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // const menuCards = Array.from(menu.childNodes);
        //event handlers for categoryBtnsBlock:
        categoryBtnsBlock.addEventListener('click', currentCategoryChange);
        categoryBtnsBlock.addEventListener('click', currentBtnChange);
        categoryBtnsBlock.addEventListener('click', colorizeCurrentBtn);
        // categoryBtnsBlock.addEventListener('click', showItems);
        categoryBtnsBlock.addEventListener('click', hideMoreItems);
        categoryBtnsBlock.addEventListener('click', hideLoadMoreBtn);
        //windoe event
        window.addEventListener('resize', hideLoadMoreBtn);
        window.addEventListener('resize', hideMoreItems);
        window.addEventListener('DOMContentLoaded', showItems);
        //load more btn events
        loadMoreBtn.addEventListener('click', showMoreItems);


        //show Items
        function showItems() {
            const menuCards = Array.from(menu.childNodes);

            console.log(currentCategory);
            menuCards.forEach((elem)=> {
                elem.remove();
            });
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
        };

        //change current category
        function currentCategoryChange() {
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
            }
        
        };

        //change current button
        function currentBtnChange() {
            let element = event.target;
            
            if(element.dataset.btnType) {
                currentBtn = element.closest('button');

            }
            // colorizeCurrentBtn();
            showItems();
            hideMoreItems();
        };

        //colorize btns
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


        //hide extra elems
        function hideLoadMoreBtn(){
            // console.log(currentCategory);
            if(currentCategory.length <= 4 || window.innerWidth > 768) {

                loadMoreBtn.style.display = 'none';
            }
            else {
                loadMoreBtn.style.display = 'inline-block';
            }
        }

        //handle load more button to show more
        function showMoreItems() {
            menu.classList.add('js-expose-hidden-cards');
            loadMoreBtn.classList.add('js-hide');
        }

         //handle load more button to hide more
        function hideMoreItems() {
            menu.classList.remove('js-expose-hidden-cards');
            loadMoreBtn.classList.remove('js-hide'); 
        };
    }
};


export default menuHandler;