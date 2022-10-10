//Array Reduce

const data = [10,20,30,40]
const result = data.reduce((value,e)=>{
    console.log(value)
    let total = value+e
    return total
},0)

console.log(result)

//-----------------------------------

const cart = [
    {product: "หนังสือ",price:150},
    {product: "ปากกา", price:20},
    {product: "ยางลบ", price:30}
]
const summation = data.reduce((value,e)=>{
    console.log(value)
    let total = value+e
    return total
},0)