const url = require("url");

const myUrl = new URL("http://myportfolio.de/index.html?id=43&status=active");

//href auslesen
console.log(myUrl.href);

//toString url
console.log(myUrl.toString())

//hostname der url
console.log(myUrl.hostname);

//pathname der url
console.log(myUrl.pathname)

//params query
const paramString = myUrl.search;
console.log(typeof paramString);

//params auslesen
console.log(myUrl.searchParams)

//params einzeln auslesen
myUrl.searchParams.forEach((value, name)=>{
 
    console.log(`${value}, ${name}`);
});


