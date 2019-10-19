var express = require("express")
var router = express.Router()
var burger = require('../models/burger.js')

// reference to burger.js file in models and calling the burger table passing the data in the function
router.get("/", function(req, res){
    burger.all(function(bData){
        console.log(bData)
        
        res.render('index', {bData} );
    })
})

// update burger
router.put('/burgers/update',function(eq, res){
    burger.update(req.body.burger_id, function(result){
        console.log(result);
        res.redirect('/');
    });
})

module.exports = router