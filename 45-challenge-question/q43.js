var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians2 = ["ainak wala jin", "ram", "hatoba"];
function goodMagician(magicians2) {
    for (var i = 0; i < magicians2.length; i++) {
        magicians2[i] = magicians2[i] + "the best";
    }
}
function copyArray(arr) {
    return __spreadArray([], arr, true);
}
function showMagician(magician) {
    magician.forEach(function (element) {
        console.log(element);
    });
}
var copyMagicianArray = copyArray(magicians2);
goodMagician(copyMagicianArray);
console.log("this is my original array");
showMagician(magicians2);
console.log("this is my modified array");
showMagician(copyMagicianArray);
