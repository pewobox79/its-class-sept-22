const promise1 = Promise.resolve("hello world");
const promise2 = 20;
const promise3 = new Promise((resolve, reject)=>{
    //server latenz simulator
    setTimeout(()=>{
        resolve("das ist promise 3");
    }, 2000)

});

const promise4 = fetch("https://dummyjson.com/posts").then(res =>res.json());

Promise.all([promise1, promise2, promise3, promise4])
.then(values => console.log(values))
.catch(err=>console.log(err));