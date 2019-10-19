var orm = require("../config/orm.js")

// calling table orm. and inserting burger table and function call back
var burger = {
    all: function(cb){
        orm.all('burgers', function(res){
            cb(res);
        
        })
    }
}

module.exports = burger