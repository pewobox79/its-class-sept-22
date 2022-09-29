
/**
 * CALLBACK
 * bis ES6 war das die gängige schreibweise asynchrone processe zu managen
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
    //set timeout ist nur zur simulierung eines server request timeouts
    setTimeout(()=>{

        let company = "";
        customers.forEach((customer)=>{
             company += `<p>${customer.firma}</p>`;
        })

        document.body.innerHTML = company

    },1000)};


    //jetzt soll ein neuer customer erstellt werden
function createCustomer(customer, callback){
        //set timeout ist nur zur simulierung eines server request timeouts
        setTimeout(()=>{
            customers.push(customer);
            callback();
        }, 2000)

    }

    createCustomer({name: "Hans", firma: "Hans GmbH"}, getCustomer)
