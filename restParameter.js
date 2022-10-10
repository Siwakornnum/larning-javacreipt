//Rest Parameter


// 2 Parameter
summation=(number1, number2)=>{
    return number1 + number2
}

console.log(summation(20,10))

// unlimid parameter
summation2 = (...numberArr)=>{
    let total = 0
    // use for of
    for (let number of numberArr) total+= number
    return total
}

console.log(summation2(10,20,30,40,50))
