// Array Map
const data = [10,20,30,40,50]

const result = data.map(e => {
    return e*e
})
console.log(result)

// -----------------------------
const data1 = ["ดิน", "ฟ้า", "อากาศ", "ต้นไม้", "น้ำ"]
const result1 = data1.map((e,i) =>{
    return `วันที่ ${i+1} มี${e}`
})
console.log(result1)

// -----------------------------
const data2 = [
    {fullname: "Siwa Kornnum",position: "Developer", age:23},
    {fullname: "mongkol",position: "Developer", age:23},
    {fullname: "pinklao",position: "Developer", age:23}
]
const result2 = data2.map((e) =>{
    return e.fullname
})
console.log(result2)