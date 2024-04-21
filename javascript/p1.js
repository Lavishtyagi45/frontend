console.log("Lavish");
const accountId= 123456;
let accountEmail="lavish123@gmail.com";
var accountPassword ="12345";
accountCity = "Bijnor";
let accountState;

// accountId=2; TypeError: Assignment to constant variable.
accountEmail="lavish@gmail.com";
accountPassword="123456";
accountCity="Noorpur";
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

// prefer not to use var 
// because of issue in block scope and functional scope