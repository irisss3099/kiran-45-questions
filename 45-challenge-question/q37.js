function makingShirts(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "i love typescript"; }
    console.log("making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it "));
}
makingShirts();
makingShirts("medium");
makingShirts("small", "i m on the way");
