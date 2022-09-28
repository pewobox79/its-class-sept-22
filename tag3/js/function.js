const myButton = document.getElementById("addButton");
const newElementsDiv = document.getElementById("newElements");
let num = 0;

function newElement(){
    num = num + 1;
    const newEl = document.createElement("div");
    newEl.setAttribute("id", num)
    const newElHeading = document.createElement("h2");
    newElHeading.innerText="Ich bin Element "+num;
    newEl.appendChild(newElHeading)
    newElementsDiv.appendChild(newEl);

}

myButton.addEventListener("click", newElement);



