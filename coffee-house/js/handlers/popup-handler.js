import store from "../products/products";

function popupHandler() {
    if(document.querySelector('.menu-section')) {

        //backdrop blocks
        const backdrop = document.querySelector('.backdrop');
        const popUpBox = document.querySelector('.popup');
        const darkScreen = document.querySelector('.backdrop__dark-screen');

        //popup elements
        const photoBlock = document.querySelector('.popup__order-photo');
        const itemName = document.querySelector('.popup__item-name');
        const itemDescription = document.querySelector('.popup__item-desc');
        const selectButtonsClasters = document.querySelectorAll('.popup__button-wrap');
        const sizeBtns = selectButtonsClasters[0];
        const additivesBtns = selectButtonsClasters[1];
        const totalPrice = document.querySelector('.popup__order-price');
        
        //buttons
        const closeBtn = document.querySelector('.submit-button');

        const sizeSBtn = document.querySelector('.popup__order-button.size-s');
        const sizeMBtn = document.querySelector('.popup__order-button.size-m');
        const sizeLBtn = document.querySelector('.popup__order-button.size-l');

        const additiveOneBtn = document.querySelector('.popup__order-button.first-button');
        const additiveTwoBtn = document.querySelector('.popup__order-button.second-button');
        const additiveThreeBtn = document.querySelector('.popup__order-button.third-button');

        //menu burrons
        const categoryBtnsBlock = document.querySelector('.menu-section__buttons');

        //menu and cards
        const menu = document.querySelector('.menu-section__articles');
        const menuCards = document.getElementsByClassName('menu-section__article');
        

        //open backdrop block on card click
        function togglePopUp() {
            function assignListenerToCards() {

                Array.from(menuCards).forEach((card) => {
                    card.addEventListener('click', function clickCard() {
                        console.log(Array.from(menuCards))
                        backdrop.classList.remove('js-hide');
                    })
                });
            }
            assignListenerToCards();
           
            

            const closeElements = [darkScreen, closeBtn];
            closeElements.forEach((element) => {
                element.addEventListener('click', (event) => {
                    backdrop.classList.add('js-hide');
                });
            });
        }
        togglePopUp();

    }
};

export default popupHandler;