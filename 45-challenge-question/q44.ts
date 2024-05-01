function makeSandwich(item:string[]){
    console.log("making your sandwich with:");
    item.forEach(element => console.log("- " + element))
    console.log("enjoy ypur sandwich !!!");
    
}

makeSandwich(['hum', 'cheese', 'lettuce']);
makeSandwich(['bacon', 'turkey', 'lettuce']);
makeSandwich(['butter', 'peanut', 'jelly']);