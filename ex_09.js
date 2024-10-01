const div = []
function splitOperation(a,b,op){
    let result = a + op + b
    result.toString()
    div.push(result)
}
splitOperation(15,43,"+")
console.log(div[0])