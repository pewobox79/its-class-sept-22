const listOfItems = document.getElementById("listOfItems");

function handleAddingItem(e){
    e.preventDefault();
    console.log(e)
    const value = document.getElementById("inputField").value;
    const text = document.createTextNode(value);
    const newListItem = document.createElement("li");
    newListItem.append(text)
    listOfItems.appendChild(newListItem)

}


addInput.addEventListener("click", handleAddingItem)        

const listOfPosts = document.getElementById("listOfPosts")
let isLoading = false

 function getData(){
    let myValues = new Array;
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(json => {
    console.log(json)
    const posts = json.posts;
    if(posts){
        let loop = 0;
        posts.map((item)=>{
            loop += 1
if(loop <= 10){    const div = document.createElement("div");
     div.innerText = item.title;
     listOfPosts.appendChild(div);  
     console.log(item.title)
        }

    })
}

})
  
}
  

const data = getData();
console.log(data)

