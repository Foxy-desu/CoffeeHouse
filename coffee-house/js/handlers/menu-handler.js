import store from "../products/products";

function menuHandler() {
    const coffeeList = store.menuPage.coffee;
    const teaList = store.menuPage.tea;
    const dessertList = store.menuPage.dessert;

    console.log(teaList);

};

export default menuHandler;