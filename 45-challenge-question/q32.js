var currentUser = ['sabila', 'kainat', 'zulbab', 'mahnoor', 'azba'];
var newUser = ['azba', 'musfira', 'ifrah'];
newUser.forEach(function (newUser) {
    if (currentUser.some(function (currentUser) { return currentUser.toLowerCase() == newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter new user name"));
    }
    else {
        console.log("".concat(newUser, " is available"));
    }
});
