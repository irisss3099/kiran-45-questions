var magicians1 = ["ainak wala jin", "ram", "hatoba"];
function goodMagician(magicians1) {
    for (var i = 0; i < magicians1.length; i++) {
        magicians1[i] = magicians1[i] + "the best";
    }
}
function showMagician(magician) {
    magician.forEach(function (element) {
        console.log(element);
    });
}
goodMagician(magicians1);
showMagician(magicians1);
