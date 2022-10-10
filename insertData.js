const colors = ["แดง", "เหลือง", "เขียว","ส้ม"]

// indexOf => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นหาเจอ ถ้าไม่เจอจะได้ -1
const result = colors.indexOf("ส้ม")
console.log(result)

// find => ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าไม่เจอจะได้ undefined
const result1 = colors.find(element => element==="ส้ม")
console.log(result1)

// findIndex => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นหาเจอ ถ้าไม่เจอจะได้ -1
const result2 = colors.findIndex(element => element==="ส้ม")
console.log(result2)