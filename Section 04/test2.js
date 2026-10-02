let age = 16;
let isTuesday = true;
let isLoyaltyCard = true;

const priceTuesday = 5;
const priceUser3To12 = 5;
const priceUser13To17 = 7;
const priceUser18To64 = 10;
const priceUser65Over = 6;
const isLoyaltyCardDiscount = 2;

if (age < 3 && isTuesday == true){
    console.log(`You need to pay $${priceTuesday}.`);
}else if(age < 3 && isTuesday == false){
    console.log(`You don't need to pay its free for you.`);
}else if(age <= 12 && isTuesday == true){
    console.log(`You need to pay $${priceTuesday}.`);
}else if(age <= 12 && isTuesday == false && isLoyaltyCard == true){
    console.log(`You need to pay $${priceUser3To12 - isLoyaltyCardDiscount}.`);
}else if(age <= 12 && isTuesday == false && isLoyaltyCard == false){
    console.log(`You need to pay $${priceUser3To12}.`);
}else if(age <= 17 && isTuesday == true){
    console.log(`You need to pay $${priceTuesday}.`);
}else if(age <= 17 && isTuesday == false && isLoyaltyCard == true){
    console.log(`You need to pay $${priceUser13To17 - isLoyaltyCardDiscount}.`);
}else if(age <= 17 && isTuesday == false && isLoyaltyCard == false){
    console.log(`You need to pay $${priceUser13To17}.`);
}else if(age <= 64 && isTuesday == true){
    console.log(`You need to pay $${priceTuesday}.`);
}else if(age <= 64 && isTuesday == false && isLoyaltyCard == true){
    console.log(`You need to pay $${priceUser18To64 - isLoyaltyCardDiscount}.`);
}else if(age <= 64 && isTuesday == false && isLoyaltyCard == false){
    console.log(`You need to pay $${priceUser18To64}.`);
}else if(age >= 65 && isTuesday == true){
    console.log(`You need to pay $${priceTuesday}.`);
}else if(age >= 65 && isTuesday == false && isLoyaltyCard == true){
    console.log(`You need to pay $${priceUser65Over - isLoyaltyCardDiscount}.`);
}else{
    console.log(`You need to pay $${priceUser65Over}.`);
}
