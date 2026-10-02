let user ="Saif";
let age = 13;
let drivingLicense = false;
let like = false;
let hungry = true;


if (age >= 18 && drivingLicense){
    console.log(`${user} you can drive.`)
}else {
    console.log(`${user} you can't drive.`)
}


if (age >= 18 || like ){
    console.log(`${user} you can drink`)
    if(age >= 18){
        console.log(`alcohol!!!`)
    }else{
    console.log(`${user} you can have a juice`)
    }
}else{
    console.log(`${user} you can go for a walk.`)
}

if (!hungry){
    console.log(`${user} you can have some rest.`)
}else{
    console.log(`${user} you can have more food.`)
}
