var animalPet = ['cat ', 'dog ', 'cow '];
console.log("Pet Animals");
for (var i = 0; i < animalPet.length; i++) {
    console.log("".concat(animalPet[i]));
}
for (var i = 0; i < animalPet.length; i++) {
    console.log("\n A ".concat(animalPet[i].toLowerCase(), " would make a great pet"));
}
console.log("\n Any of these animals would make a pet \n ");
