let age = 20;
let isTuesday = false;
let hadLoyaltyCard = true;

let price;



// Age-based pricing

if (age < 3){
    price = 0; 
}else if (isTuesday == true){
    price = 5;
}else if(age <=12){
    price = 5;
}else if(age <= 17){
    price = 7;
}else if(age <= 64){
    price = 10;
}else{
    price = 6;
}

if (price > 3 && !isTuesday && hadLoyaltyCard){
    price -= 2;
}

if( price < 0 ){
    price == 0;
}

console.log("Your ticket costs $" + price);