function burgerMenuHandler() {
    //burger handler variables
    const body = document.body;
    const buttonOpen = document.querySelector('.burger');
    const menu = document.querySelector('.header-block__nav');
    const menuItems = menu.querySelectorAll('.navigation-item');

    //event with buttons (close/open)
    buttonOpen.addEventListener('click', (event)=> {
        buttonOpen.classList.toggle('js-burger-button_become-close');
        

        if(menu.classList.contains('js-menu_active')){
            menu.classList.toggle('js-menu_active');
            body.classList.toggle('js-body_no-scroll');
            setTimeout(()=> {
                menu.classList.toggle('js-reveal');
            },600)
        }
        else {
            menu.classList.toggle('js-reveal');
            setTimeout(()=> {
                menu.classList.toggle('js-menu_active');
                body.classList.toggle('js-body_no-scroll');
            },0)
        }
        // menu.classList.toggle('js-menu_active');
        // body.classList.toggle('js-body_no-scroll');

    });

    //event with menu items
    menuItems.forEach((element)=> {
        element.addEventListener('click', (event)=> {
            menu.classList.remove('js-menu_active');
            buttonOpen.classList.remove('js-burger-button_become-close');
            body.classList.remove('js-body_no-scroll');
            setTimeout(()=> {
                menu.classList.remove('js-reveal');
            },100)
            
        })
    })

    //resize window
    const mobileWidthMediaQuery = window.matchMedia('(max-width: 768px)');
    mobileWidthMediaQuery.addEventListener('change', ()=> {
        body.classList.remove('js-body_no-scroll');
        menu.classList.remove('js-menu_active');
        buttonOpen.classList.remove('js-burger-button_become-close');
        menu.classList.remove('js-reveal');
    })
};

export default burgerMenuHandler;