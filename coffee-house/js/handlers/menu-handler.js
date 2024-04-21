import store from "../products/products";

function menuHandler() {
    //check if the right page is displayed
    if(document.querySelector('.menu-section')) {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //                                         MENU VARIABLES AND CONSTANTS                                       //
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        const body = document.body;

        //lists of menu items
        const coffeeList = store.menuPage.coffee,
            teaList = store.menuPage.tea,
            dessertList = store.menuPage.dessert;

        //menu controls
        const categoryBtnsBlock = document.querySelector('.menu-section__buttons'),
            categoryBtns = document.querySelectorAll('.menu-section__button'),
            defaultBtn = categoryBtnsBlock.firstElementChild, //shown as active on  page load
            loadMoreBtn = document.querySelector('.menu-section__refresh');

        //menu elements
        const menu = document.querySelector('.menu-section__articles');

        //variables;
        let currentCategory = coffeeList,
            currentBtn = defaultBtn;
        
        let currCard,
            currItemName,
            currObj;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //                                         POPUP VARIABLES AND CONSTANTS                                      //
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            
        //backdrop blocks
        const backdrop = document.querySelector('.backdrop');
        const popUpBox = document.querySelector('.popup');
        const darkScreen = document.querySelector('.backdrop__dark-screen');

        //popup elements
        let photoBlock = document.querySelector('.popup__order-photo');
        let itemName = document.querySelector('.popup__item-name');
        let itemDescription = document.querySelector('.popup__item-desc');
        let selectButtonsClasters = document.querySelectorAll('.popup__button-wrap');
        let sizeBtns = selectButtonsClasters[0];
        let additivesBtns = selectButtonsClasters[1];
        let totalPrice
        let popupContent = popUpBox.children;
        
        //buttons
        const closeBtn = document.getElementsByClassName('submit-button');

        const sizeSBtn = document.querySelector('.popup__order-button.size-s');
        const sizeMBtn = document.querySelector('.popup__order-button.size-m');
        const sizeLBtn = document.querySelector('.popup__order-button.size-l');

        const additiveOneBtn = document.querySelector('.popup__order-button.first-button');
        const additiveTwoBtn = document.querySelector('.popup__order-button.second-button');
        const additiveThreeBtn = document.querySelector('.popup__order-button.third-button');

        let sizeButtons;
        let addButtons;


        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //                                                  MENU HANDLING                                              //
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        //event listening:
        categoryBtnsBlock.addEventListener('click', currentCategoryChange);
        categoryBtnsBlock.addEventListener('click', currentBtnChange);
        categoryBtnsBlock.addEventListener('click', colorizeCurrentBtn);
        categoryBtnsBlock.addEventListener('click', hideMoreItems);
        categoryBtnsBlock.addEventListener('click', (e) => {
            renderItems(e);
        });
        categoryBtnsBlock.addEventListener('click', hideLoadMoreBtn);
        //windoe event
        window.addEventListener('resize', hideLoadMoreBtn);
        window.addEventListener('resize', hideMoreItems);
        window.addEventListener('DOMContentLoaded', renderItems);
        //load more btn events
        loadMoreBtn.addEventListener('click', showMoreItems);

        //show Items
        function renderItems() {
            const menuCards = Array.from(menu.childNodes);

            console.log(currentCategory);
            menuCards.forEach((elem)=> {
                elem.remove();
            });
            //not only add cards to the menu block, but also assign event listeners to them as created
            currentCategory.map((elem) => {
                const cardTemplate = `
                <!--article start-->
                <article class="menu-section__article" data-item-category="${elem.category}" data-item-name="${elem.name}">
                    <div class="menu-section__item-image-wrap">
                        <img class="menu-section__item-image menu-section__image1" src="${elem.thumbnail}" alt="a photo of ${elem.name}">
                    </div>
                    <div class="menu-section__item-info-wrap">
                        <h3 class="menu-section__item-heading">
                            ${elem.name}
                        </h3>
                        <p class="menu-section__item-description">
                            ${elem.description}
                        </p>
                        <p class="menu-section__item-price">
                            $${elem.price}
                        </p>
                    </div>
                </article>
                <!--article end-->
                `;
                menu.insertAdjacentHTML('beforeend', cardTemplate);
                const cards = Array.from(menu.children);
                cards.forEach((card) => {
                    card.addEventListener('click', openPopUp);
                    // card.addEventListener('click', renderPopUp);
                });
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
        };

        //colorize category btns
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

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //                                         POPUP HANDLING                                                     //
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        //open backdrop block on card click
        function openPopUp() {
            backdrop.classList.remove('js-hide');
            body.classList.add('js-body_no-scroll');
            renderPopUp();
            getButtonGroups();
            addColorizeHandler();
            addCalculationHandler();

        };

        //close popup
        function closePopUp() {
            backdrop.classList.add('js-hide');
            body.classList.remove('js-body_no-scroll');
            Array.from(popupContent).forEach(elem => elem.remove())
        };

        //renderPopup
        function renderPopUp() {

            currCard = event.target.closest('.menu-section__article');
            currItemName = currCard.dataset.itemName;
            
            
            function findItemObj() {

                currentCategory.forEach((elem)=> {
                    if(elem.name === currItemName) {
                        currObj = JSON.parse(JSON.stringify(elem));
                        console.log(elem);
                        console.log(currObj.name);

                        function renderContent() {
                            const name = currObj.name,
                                thumbnail = currObj.thumbnail,
                                description = currObj.description,
                                price = currObj.price,
                                cizeS = currObj.sizes.s.size,
                                sizeM = currObj.sizes.m.size,
                                sizeL = currObj.sizes.l.size,
                                addOne = currObj.additives[0].name,
                                addTwo = currObj.additives[1].name,
                                addThree= currObj.additives[2].name,

                                popupContentTemplate = `
                        <div class="popup__order-wrap">
                            <div class="popup__order-photo-wrap">
                                <img class="popup__order-photo" src="${thumbnail}" alt="${name} photo">
                            </div>
                            <div class="popup__item-info-wrap">
                                <h3 class="popup__item-name">
                                    ${name}
                                </h3>
                                <div class="popup__order-info">
                                    <p class="popup__item-desc">
                                    ${description}
                                    </p>
                                    <form name="order:${name}">
                                        <div class="order-options">
                                            <div class="popup__order-sizes">
                                                <p for class="popup__order-heading">Size</p>
                                                <div class="popup__button-wrap" id="size-buttons">
                                                    <button class="popup__order-button size-s popup__order-button--active" type="button" disabled value="${cizeS}"><span class="button-inner-circle">S</span><span class="button-text">${cizeS}</span></button>
                                                    <button class="popup__order-button size-m" type="button" value="${sizeM}"><span class="button-inner-circle">M</span><span class="button-text">${sizeM}</span></button>
                                                    <button class="popup__order-button size-l" type="button" value="${sizeL}"><span class="button-inner-circle">L</span><span class="button-text">${sizeL}</span></button>
                                                </div>
                                            </div>
                                            <div class="popup__order-additives">
                                                <p class="popup__order-heading">Additives</p>
                                                <div class="popup__button-wrap" id="additives-buttons">
                                                    <button class="popup__order-button first-button" type="button" value="${addOne}"><span class="button-inner-circle">1</span><span class="button-text">${addOne}</span></button>
                                                    <button class="popup__order-button second-button" type="button" value="${addTwo}"><span class="button-inner-circle">2</span><span class="button-text">${addTwo}</span></button>
                                                    <button class="popup__order-button third-button" type="button" value="${addThree}"><span class="button-inner-circle">3</span><span class="button-text">${addThree}</span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div class="popup__order-total-wrap">
                                        <div class="popup__order-total-container">
                                            <span class="popup__order-total">Total:</span>
                                            <span class="popup__order-price">$${price}</span>
                                        </div>
                                        <div class="popup__order-total-warning">
                                            <div class="popup__warning-sign"></div>
                                            <p class="popup__warning-text">
                                                The cost is not final. Download our mobile app to see the final price
                                                and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.
                                            </p>
                                        </div>
                                    </div>
                                    <button form="order:${name}" class="popup__order-button submit-button">Close</button>
                                </div>
                            </div>
                        </div>
                        `;
                        popUpBox.insertAdjacentHTML('beforeend', popupContentTemplate);
                        }
                        renderContent();
                    }
                })
            }
            findItemObj();


            if(darkScreen){
                darkScreen.addEventListener('click', closePopUp);
            Array.from(closeBtn).forEach((elem) => {
                elem.addEventListener('click', closePopUp)
                console.log(elem)
            });
            }
        };

        function getButtonGroups() {
            sizeButtons = document.getElementById('size-buttons');
            addButtons = document.getElementById('additives-buttons');
            totalPrice = document.querySelector('.popup__order-price');
        }
        //colorize active button
        function addColorizeHandler() {
            // sizeButtons = document.getElementById('size-buttons');
            // addButtons = document.getElementById('additives-buttons');

            function getActive(e) {
                const active = e.target.closest('.popup__order-button');
                return active; 
            };

            function colorizeSize(e) {
                const parent = e.currentTarget;
                const active = getActive(e);
                Array.from(parent.children).forEach((button) => {
                    if (button === active) {
                        button.classList.add('popup__order-button--active');
                        button.setAttribute('disabled', '');
                    }
                    else {
                        button.classList.remove('popup__order-button--active');
                        button.removeAttribute('disabled');
                    }
                })
            };

            function colorizeAdditives(e) {
                const parent = e.currentTarget;
                const active = getActive(e);
                Array.from(parent.children).forEach((button) => {
                    if (button === active) {
                        button.classList.toggle('popup__order-button--active');
                    }
                })
            }

            sizeButtons.addEventListener('click', colorizeSize);
            addButtons.addEventListener('click', colorizeAdditives);
        };

        //order calculations
        function addCalculationHandler() {
            const currentItem = currObj;
            const chosenAdditives = [];
            let sizeCost = Number(currObj.price);

            function getActive(e) {
                const active = e.target.closest('.popup__order-button');
                return active; 
            };

            function getTotal(e) {
                
                const parent = e.currentTarget;
                const currentActiveBtn = getActive(e);
                
                function getSizeCost() {
                    
                    
                    Array.from(parent.children).forEach((button) => {
                        for (let value of Object.values(currentItem.sizes)) {
                            if (button === currentActiveBtn && button.value === value.size) {
                                sizeCost = Number(currentItem.price) + Number(value.addPrice)
                            }
                        }
                    });

                    return sizeCost;
                }

                function getAdditivesPrice() {
                    
                    Array.from(parent.children).forEach((button) => {
                        for (let value of Object.values(currentItem.additives)) {
                            if(button === currentActiveBtn && button.value === value.name) {
                                if (chosenAdditives.length === 0) {
                                    chosenAdditives.push(value);
                                    return;
                                }
                                else {
                                    let delIndex = -1;

                                    chosenAdditives.forEach((additive, index) => {
                                        if(additive.name === value.name) {
                                            delIndex = index;
                                        }
                                    })
                                    if (delIndex === -1) chosenAdditives.push(value);
                                    else chosenAdditives.splice(delIndex, 1);
                                }
                                
                            }
                        }
                    })

                    const additivesSum = chosenAdditives.length > 0
                    ? chosenAdditives.map((additive) => {
                        return Number(additive.addPrice);
                      }).reduce((prev, curr) => Number(prev) + Number(curr))
                    : 0;

                    return additivesSum;
                }
                
                return (getSizeCost() + getAdditivesPrice()).toFixed(2);
            }

            
            addButtons.addEventListener('click', (e)=> totalPrice.textContent = `$${getTotal(e)}`);
            sizeButtons.addEventListener('click', (e)=> totalPrice.textContent = `$${getTotal(e)}`);
        }
        
    };
};


export default menuHandler;