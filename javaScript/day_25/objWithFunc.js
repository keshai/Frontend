// function calPrice(val1,val2, ...val){ 
//     return val
// }
// console.log(calPrice(200,300,600,800))

// const user = {
//     username:'keshav',
//     prices:1100
// }
function handleCart(obj){
    console.log(`username:${obj.username} and value:${obj.price}`)
}
// handleCart(user)
handleCart({
    username: 'keshav',
    price:1000000
})