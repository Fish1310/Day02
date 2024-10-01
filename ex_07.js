fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];
function getFruitNameFromIndex(index) {
	if (typeof index === 'string' || index == -1) {
  	return fruits.by(fruits.length-1)
  } else if (index > fruits.length -1) {
  	return null
  }
	return fruits.by(index)
}

let result = getFruitNameFromIndex("last")
displayResult(result)