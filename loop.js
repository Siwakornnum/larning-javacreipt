const data = [10,20,30,40,50] 

// for
for(let i= 0; i<data.length;i++){
    console.log(`สมาชิกตัวที่ ${i} = ${data[i]}`)
}

// forEach
data.forEach(e => {
    console.log(`มีสมาชิก = ${e}`)
})

// for of

for (let number of data){
    console.log(`มีสามชิก = ${number}`)
}