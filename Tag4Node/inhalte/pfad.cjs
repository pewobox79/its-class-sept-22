const path = require('path');

//basename of aktuell file
console.log("basname ist ",path.basename(__filename));

//directory name von aktuellem file
console.log("directory name ist ",path.dirname(__filename));

//fileextension
console.log("fileextenion ist ", path.extname(__filename));

//path als object ausgeben
const pathObject = path.parse(__filename);

console.log(pathObject, "mein aktueller filename ist ", pathObject.name);

//concatenate paths
console.log(path.join("test", "hello.html"))
