const accountId = 144558
let accountEmail = "aniekt@google.com"
var accountPassword = "123456"
accountCity = 'Nagpur'
let accountState;

// accountId = 2   // not allowed 

/*
Prefer not to use var 
because of issues in blocked scope and functional scope
*/

accountEmail = 'hecker@google.com'
accountPassword = "1234232"
accountCity = "Bengaluru"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
