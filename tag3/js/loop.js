const myArrayItems = document.getElementById("arrayItems");

const myArray = ["hallo", "ich", "bin", "der", "peter"];

const myObjectArray = [
    {   name: "peter",
        nachname: "Wolf"
    },
    {
        name: "klaus", 
        nachname: "mueller"
    }
]

myObjectArray.map((item)=>{
    const newObjEl = document.createElement("h2");
    //newObjEl.innerText = "Ich bin der "+ item.nachname +" "+ item.name
    newObjEl.innerText = `Ich bin der ${item.nachname} ${item.name}`;
    myArrayItems.appendChild(newObjEl);
    console.log(item);
})



/**myArray.map((item)=>{
    const arrayHeading = document.createElement("h3");
    arrayHeading.innerText= item;
    myArrayItems.appendChild(arrayHeading);


})*/