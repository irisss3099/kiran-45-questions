"use strict";
//new array
let guestarray = ["zulbab", "kainat", "manaim"];
// new guest invite
let newguest = "warda";
//add new guest at beginning
guestarray.unshift("kiran");
//console.log(guestarray);
//add guest in middle
let middleguest = "hifza";
let middleindex = guestarray.length / 2;
guestarray.splice(middleindex, 0, middleguest);
//console.log(guestarray);
//add guest in last
guestarray.push("mahnoor");
console.log(guestarray);
//step 1 print message
console.log("we can invite only two people for dinner");
//step 2 remove guest from list
//guestarray.pop();
//guestarray.pop();
//console.log(guestarray);
//but we use logic
while (guestarray.length > 2) {
    let removeguest = guestarray.pop();
    console.log(`\nsorry ${removeguest} we can't invite  you to dinner`);
}
guestarray.map((item) => console.log(`\n${item} you are still invited to dinner`));
guestarray.pop();
guestarray.pop();
console.log(guestarray);
