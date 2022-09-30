const express = require('express');

//initialisierung von Router
const router = express.Router();


 //anstatt app.get wird es zu router.get usw. geändert....
router.get('/new', (req, res)=>{

    res.render('form');

});

router.get('/:id', (req, res)=>{

    res.send(`das ist user nummer ${req.params.id}`)

})

router.post('/', (req, res)=>{
    
    res.send(`create new user with vorname ${req.body.vorname}`);
});

router.put('/:id', (req, res)=>{
    res.send(`user updated with ID ${req.params.id}`)
})

router.delete('/:id', (req, res)=>{
    res.send(`user id ${req.params.id} deleted`)
});


/*

//organisiertere Schreibweise von oben....
router
.route('/:id')
.get((req, res)=>{
    res.send(`das ist user nummer ${req.params.id}`)
})
.post((req, res)=>{
    res.send("create new user");
})
.delete((req, res)=>{
    res.send(`user id ${req.params.id} deleted`)
})

*/




module.exports = router