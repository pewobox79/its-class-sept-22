const listOfPosts = document.getElementById("listOfPosts");

const listOfPostHeader = document.createElement("h1");
listOfPostHeader.innerText = "Das sind meine Posts"
listOfPostHeader.style.fontSize="3rem";
listOfPostHeader.style.color ="red";
listOfPostHeader.style.fontWeight=600;

listOfPosts.appendChild(listOfPostHeader)

const URL = "https://dummyjson.com/posts"



fetch(URL)
.then(res => res.json())
.then(data => {
    
    const posts = data.posts;
    
    let numberOfArticle=0;
    
    posts.map((post)=>{
    
        numberOfArticle += 1;
        
        if(numberOfArticle <= 10){

            const divEl = document.createElement("div");
            const h3 = document.createElement("h3");
            const bodyEl = document.createElement("p");
            const hRLine=document.createElement("hr")
            hRLine.style.margin="40px 0px";
            bodyEl.style.padding="10px";

            h3.innerText = post.title;
            bodyEl.innerText = post.body;
            
            divEl.setAttribute("id", post.id);
            
            divEl.appendChild(h3);
            divEl.appendChild(bodyEl)
            divEl.appendChild(hRLine)

            listOfPosts.appendChild(divEl)
            
        }
        

    })
})
.catch((err)=>{
    console.log(err);
    const errorEl = document.createElement("div");
    errorEl.innerText = err
    listOfPosts.appendChild(errorEl)
 
})
