const express = require('express');
const app = express();

//um die statischen dateien zu lesen 
app.use(express.static(__dirname + "/views"));

//auslesen von post values
app.use(express.urlencoded({extended: true}));

/**
 * gängigste methoden für express app
 * 
 * app.get();
    app.post();
    app.delete();
    app.put();
 */

    /**
 * extenstions um die render function mit html usw. auszulesen
 * 
 * PUG
 * EJS
 * quelle link für EJS nutzung 
 * https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application
 * 
 * um die ejs sprache zu erkenen, benötigt das IDE eine extension
 * https://marketplace.visualstudio.com/items?itemName=DigitalBrainstem.javascript-ejs-support
 * 
 */

    //initieren der view engine NICHT VERGESSEN!
    app.set('view engine', 'ejs')


    //Routes gesammelt
    app.get('/', (req, res)=>{
       
        //render page als .ejs datei
        //alternativ kan ich dateien vom server in das frontend spielen
        res.render("homepage",{text: "hier ist mein text aus dem server"});

    });

    app.get('/downloads', (req, res)=>{

        res.download("public/test.txt")

    });

    //Router einfügen
    const userRouter = require('./routes/users.cjs');
    //aktivieren des router durch app.use
    app.use('/users', userRouter);

    

app.listen(3500, ()=>console.log("port 3500"));
