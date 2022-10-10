// Default Parameter

setDefaultCustomer= (customerName, customerAddress, customerPosition) =>{
    if (!customerAddress){
        customerAddress = "ไม่มีข้อมูลที่อยู่"
    }
    if (!customerPosition){
        customerPosition = "ไม่มีข้อมูลตำแหน่ง"
    }
    const profileCustomer = `ชือลูกค้า : ${customerName} 
    ที่อยู่ลูกค้า : ${customerAddress}
    ตำแหน่งลูกค้า : ${customerPosition}`
    return profileCustomer
}

console.log(setDefaultCustomer("Siwa Kornnum", "Samutpakarn", "Developer"))
console.log(setDefaultCustomer("Siwa Kornnum"))