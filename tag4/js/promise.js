/**
 * promises
 */

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
    setTimeout(()=>{
        let myCustomers = "";

        customers.forEach((customer)=>{
            myCustomers += `<p>${customer.name}</p>`;
        });

        document.body.innerHTML = myCustomers
    }, 1000)
}


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


createCustomer({name: "paul", firma: "paul GmbH"})
.then(getCustomer)
.catch((err)=>{console.log(err)})

