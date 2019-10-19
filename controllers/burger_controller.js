var express = require("express")
var router = express.Router()
var burger = require('../models/burger.js')

// root route for index
router.get("/", function(req, res){
    res.render('index');
})

module.exports = router