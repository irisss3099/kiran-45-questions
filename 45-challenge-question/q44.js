function makeSandwich(item) {
    console.log("making your sandwich with:");
    item.forEach(function (element) { return console.log("- " + element); });
    console.log("enjoy ypur sandwich !!!");
}
makeSandwich(['hum', 'cheese', 'lettuce']);
makeSandwich(['bacon', 'turkey', 'lettuce']);
makeSandwich(['butter', 'peanut', 'jelly']);
