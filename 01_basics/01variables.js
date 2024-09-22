const accountId=172589
let accountEmail="jalil@google.com"
var accountPasssword="901053"
accountCity="ISB"  // not recommended without declaring
let accountState;
console.log(accountId);
accountEmail="haka@gmail.com"
accountPassword="ji47g1"
accountCity="LHR"

/* prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity])