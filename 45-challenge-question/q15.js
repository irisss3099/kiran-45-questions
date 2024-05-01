"use strict";
//new array
let guestarray = ["zulbab", "kainat", "manaim"];
//send message
//guestarray.map((items)=> console.log(`hello,${items} you are invited to dinner`));
//01 - cannot make a dinner
let cannotattend = "kainat";
console.log(`${cannotattend} can not make it for dinner`);
//02 - new guest invite
let newguest = "warda";
guestarray[guestarray.indexOf(cannotattend)] = newguest;
console.log(guestarray);
//03 - send a message
guestarray.map((items) => console.log(`hello,${items} you are invited to dinner`));
