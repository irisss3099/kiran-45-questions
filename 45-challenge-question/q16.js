"use strict";
//new array
let guestarray = ["zulbab", "kainat", "manaim"];
// new guest invite
let newguest = "warda";
//send statement
//console.log("wellcome friends, we found a bigger dinner table");
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
//console.log(guestarray);
//send new list
guestarray.map((item) => console.log(`Dear ${item} you are invited to dinner!`));
