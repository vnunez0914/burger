var express = require("express")
var router = express.Router()
var burger = require('../models/burger.js')

// reference to burger.js file in models and calling the burger table passing the data in the function
router.get("/", function(req, res){
    burger.all(function(data){
        console.log(data)
        res.render('index');
    })
})

module.exports = router