const fs = require('fs');
const path = require('path');
const buffer = require('buffer');
//const image = require('../bilder/pewo-emoji-2.png');


/** 
// ordner erstellen

fs.mkdir(path.join(__dirname, 'neuerOrdner'),{},(err)=>{
    if(err){
        console.log("das ist was faul");
    }
    console.log("folder created...")
}) 

*/

/*
//file beschreiben
const inputValue = "ich bin der input für die test.txt datei!";
const inputValue2 = {name:"das ist ein neuer input für die test.txt"};

fs.writeFile(path.join(__dirname, "neuerOrdner", "test.txt"),inputValue, (err)=>{
    if(err){
        console.log("da kommt nix");
    }

    //text wird zu erstem Writing hinzugefügt...dieses appendFile muss im Callback von der ersten writeFile sein!
    //ansonsten wird erste text einfach überschrieben...
    fs.appendFile(path.join(__dirname, "neuerOrdner", "test.txt"), JSON.stringify(inputValue2), (err)=>{
        if(err){
            console.log("beim zweiten mal ist was schief gelaufen")
        }
    
        console.log("datei mit inputvalue 2 check");
    })

    console.log("datei beschrieben");
} )
*/
/**
 * 
 * buffer image test
 

const imgBuf = new buffer(data, "base64"); 

fs.writeFile(path.join(__dirname, "/neuerOrdner", "bild.txt"), image, imgBuf, (err)=>{
    if(err){
        console.log("buffer failed")
    }

    console.log("buffer success")
})
*/


/**
 * read file
 */

/*
fs.readFile(path.join(__dirname, "neuerOrdner", "test.txt"), "utf-8", (err, data)=>{
    if(err){
        console.log("lesen lief schief");
    }

    console.log("die daten sind gelesen", data )
})
*/

fs.rename(path.join(__dirname, "neuerOrdner", "test.txt"), path.join(__dirname, "neuerOrdner", "myTest.txt"), (err)=>{
    if(err) throw err;
    console.log("datei erfolgreich umgeschrieben...")
})
