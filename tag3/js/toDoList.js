const inputField = document.getElementById("inputField");
const listItems = document.getElementById("listOfItems");
const form = document.getElementById("toDoList");
const addButton = document.getElementById("addInput")

function handleAddItem(event){
    event.preventDefault();
if(inputField.value != "" && inputField.value.length > 5){

    let inputValue = inputField.value
    const li = document.createElement("li");
    li.style.fontSize = "1.7rem";
    li.style.listStyleType = "none";
    li.innerText=inputValue;
    listItems.appendChild(li);
    inputField.value = "";

}else{
    alert("field has to be min 1 character, you stupid!");
}
}




addButton.addEventListener("click", handleAddItem)
