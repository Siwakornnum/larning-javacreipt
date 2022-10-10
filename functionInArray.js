const saraly = [12000, 20000, 50000]

// push  
saraly.push(...[10,20,30])
console.log(saraly)

// pop
saraly.pop()
saraly.pop()
console.log(saraly)

// shift
saraly.shift()
console.log(saraly)

// unshift
saraly.unshift(200)
saraly.unshift(...[70,80,90])
console.log(saraly)

//splice 
// splice(ตำแหน่งที่จะลบ, จำนวนที่จะลบ, ค่าที่จะต้องการแทรกไปที่ตำแหน่งที่ลบ)
saraly.splice(0,3, 999)
console.log(saraly)


// slice
// slice(ตำแหน่งเริ่มต้น, ตำแหน่งสิ้นสุด-1)
const lastData = saraly.splice(2,2)
console.log(lastData)

