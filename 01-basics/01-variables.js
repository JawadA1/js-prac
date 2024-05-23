const accountId = 144452  // its value cannot be changed
let accountEmail = "aw@gmail.com"  // its value canbe changed
var accountPassword = "12345"  // its value cannot be changed
accountCity = "Karachi"  // you can also declare a variable like this
let accountState;  // we can also declare a variable without assigning a value


// accountId = 2133  // It is not allowed to change const value in javascript


// NOTE //
/*
Prefer not to use var 
because of issue in blockscope and functional scope
*/
// NOTE //

accountEmail = "ja@gmail.com"
accountPassword = "2121212"
accountCity = "Lahore"

console.log(accountId);

console.table([accountEmail,accountPassword,accountCity,accountState])