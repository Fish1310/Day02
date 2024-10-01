// Write your function here ...
const fruit = ["strawberry","strawberry","strawberry","apple","apple","lime","lime","peach","pear","pear"]
let length = fruit.length;

console.log(length + " fruit(s) selected")

function getBasketContent() {
	return fruit
}

// DO NOT TOUCH, this will do the call your function for you and display the fruits if you've done it well
if (typeof getBasketContent === "function") {
	const fruits = getBasketContent()
	showMyBasket(fruits)
}