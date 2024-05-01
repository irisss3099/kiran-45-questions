let users : string[] = ['sabila', 'kainat', 'zulbab', 'admin']

for(let user of users)
if(user == 'admin'){
    console.log("Hello admin, would you like to see a status report?")
}
else{
    console.log(`Hello ${user} Thankyou for logging again..!!!`);
    
}