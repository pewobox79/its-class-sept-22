let myClassArray=["textBox", "textBoxFonts"];


const startEl = document.getElementById("start");

/**
 * erstelle element
 */

//erst die section bauen
const sectionEl = document.createElement("section");
sectionEl.setAttribute("id", "section1")
//danach den inneren div
const sectionInner = document.createElement("div");
//section mit dem sectionInner verbinden
sectionEl.appendChild(sectionInner);



//überschrift H1 erstellen 
const heading1 = document.createElement("h1");
heading1.setAttribute("id", Math.random()); 
sectionInner.appendChild(heading1); //an section hängen
heading1.innerText="Das ist mein heading1";
heading1.style.color = "red"; //farbe der überschrift festlegen
heading1.style.fontSize = "3rem"; //font größe festlegen


//paragraph hinzufügen 
const paragEl = document.createElement("p");
paragEl.innerHTML="<strong>das ist mein text</strong>"; //html text einfügen
paragEl.style.backgroundColor="blue"; //überlagert background-color von .textBox
paragEl.classList.add(...myClassArray); //füge 2 class items hinzu - reihenfolge beachten
sectionInner.appendChild(paragEl); //paragraph an seciton inner html


/** 
 * dieser bereich setzt zuerst textBox fest und textBoxFonts überschreibt !
 * 
paragEl.className="textBox"; //bekommt class textbox als formatierung
paragEl.className="textBoxFonts";//zweite class für textBox
*/


//die gesamte section incl. dem section inner an die ID=START hängen
startEl.appendChild(sectionEl);

console.log(startEl)



