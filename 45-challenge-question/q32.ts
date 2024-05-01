let currentUser: string[] = ['sabila', 'kainat', 'zulbab', 'mahnoor','azba']
let newUser: string[] = ['azba', 'musfira', 'ifrah']

newUser.forEach((newUser) => {
if(
    currentUser.some(
        currentUser => currentUser.toLowerCase() == newUser.toLowerCase()
    )
){
    console.log(`${newUser} will need to enter new user name`); 
}
else {
    console.log(`${newUser} is available`)
}

})