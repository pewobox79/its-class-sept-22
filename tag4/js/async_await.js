const customers =[
    {
        name: "peter",
        firma: "peter GmbH"
    },
    {
        name: "klaus", 
        firma: "Klaus GmbH"
    }
];


function getCustomer(){
    //set timeout ist nur zur simulierung eines server request timeouts
    setTimeout(()=>{

        let company = "";
        customers.forEach((customer)=>{
             company += `<p>${customer.firma}</p>`;
        })

        document.body.innerHTML = company

    },1000)};


    function createCustomer(customer){
        return new Promise((resolve, reject)=>{
            
            //simulation server latenzen
            setTimeout(()=>{
                customers.push(customer);
    
                //error check
                const error = false;
    
                if(!error){
                        resolve();
                }else{
                        reject("Da ist was faul! Bitte checken...");
                }
    
            },2000)
    
        })
    
    }


    async function init(){
        await createCustomer({ name: "heinz", firma: "heinz GmbH" });
        getCustomer();
    }

init();



//fetch mit AsyncAwait
//responses werden in constanten gespeichert und mit dem TAG AWAIT versehen
//fetch liefert immer in promise

async function getData(){
    const response = await fetch("https://dummyjson.com/posts");
    const data = await response.json();
    console.log("meine post data",data)

}
getData();