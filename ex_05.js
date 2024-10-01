function getBasketContent() {
    const fruits = [
        { name: 'strawberry', quantity: 3 },
        { name: 'apple', quantity: 2 },
        { name: 'lime', quantity: 2 },
        { name: 'peach', quantity: 1 },
        { name: 'pear', quantity: 2 }
    ];

    let basket = [];
    let totalFruits = 0;

    for (let i = 0; i < fruits.length; i++) {
        for (let j = 0; j < fruits[i].quantity; j++) {
            basket.push(fruits[i].name);
        }
        totalFruits += fruits[i].quantity;
    }

    console.log(totalFruits + " fruit(s) selected");

    return basket;
}

// DO NOT TOUCH, this will call your function and display the fruits if you've done it well
if (typeof getBasketContent === "function") {
    const fruits = getBasketContent();
    showMyBasket(fruits);
}
