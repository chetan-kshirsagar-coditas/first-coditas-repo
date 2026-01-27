const customerAge = 15;

if(customerAge > 25){
    console.log("Royal Stag!");
}else if(customerAge>=18 && customerAge<=25){
    console.log("Mocktails");
}else{
    console.log("Milk!");
}

const suggestedDrink = customerAge > 25 ? "ROAYL STAG" : (customerAge >=18) ?  "Mocktails" : "Milk";