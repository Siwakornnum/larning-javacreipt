// array filter

const data = [10,20,30,40,50]

const result = data.filter(e=>{
    return e>20
})
console.log(result)

// ----------------------
const data2 = [
    {fullname: "Siwa Kornnum",position: "Developer", age:23, saraly:25000},
    {fullname: "mongkol",position: "Developer", age:23, saraly:35000},
    {fullname: "pinklao",position: "Developer", age:23, saraly:45000}
]

const result1 = data2.filter(e=>{
    return e.saraly> 30000
})

console.log(result1)