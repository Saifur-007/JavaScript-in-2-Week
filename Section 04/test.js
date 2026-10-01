let user = "Saif"

let totalPrice = 55;
let speedMore = (totalPrice - 100);
let discountedPrice = ((totalPrice / 100) * 30);
let needToPay = (totalPrice - discountedPrice);
let ifWant = false;



if(totalPrice >= 100){
    console.log(`${user} you are getting 30% discount. So your total price is ${needToPay}. You don't need to pay $${totalPrice} anymore. $${discountedPrice} is totally discounted.`)
}else if(totalPrice <= 100 && ifWant == true){
    console.log(`${user} if you spend $${speedMore} more. You can get 30% discount.`)
}else{
    console.log(`${user} if you don't want discount. Then just pay $${speedMore} plz.`)
}